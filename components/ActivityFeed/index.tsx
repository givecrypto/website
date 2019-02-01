import * as React from "react";
import { Motion, spring } from "react-motion";
import ActivityFeedItem, { Event } from "./ActivityFeedItem";
import { toGlobalId } from "../../utils/globalId";
import { DragBar } from "./components";
import { breakpoints } from "../../design-system/breakpoints";
import MediaQuery from "react-responsive";

// Styled Components
import { Container } from "./components";

// Default Values
const DEFAULT_Y_POSITION = 155;

// Types
export interface ActivityFeedProps {
  events: Event[];
  onDragStart: () => void | null;
  onDragEnd: () => void | null;
}
export interface ActivityFeedState {
  touchStartPosition: number;
  shouldHide: boolean;
  focused: boolean;
  timer?: NodeJS.Timer;
  isPressed?: boolean;
  dragY?: number;
}

export default class ActivityFeed extends React.Component<
  ActivityFeedProps,
  ActivityFeedState
> {
  // Initial state
  state: ActivityFeedState = {
    touchStartPosition: 0,
    isPressed: false,
    shouldHide: true,
    focused: false,
    timer: null,
    dragY: DEFAULT_Y_POSITION,
  };

  // componentDidMount() {
  //   window.addEventListener("touchmove", this.handleTouchMove);
  // }

  // Touch methods
  // ==================
  handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    console.log("start");
    const { clientY } = event.touches[0];
    const { focused } = this.state;

    // Tell the parent to freeze on scroll
    this.props.onDragStart();

    // Update state
    this.setState({
      touchStartPosition: clientY - (focused ? 0 : DEFAULT_Y_POSITION),
      isPressed: true,
    });
  };

  handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    console.log("drag");
    const { clientY } = event.touches[0];
    const { touchStartPosition } = this.state;

    this.setState({ dragY: clientY - touchStartPosition });
  };

  handleTouchEnd = () => {
    const { dragY } = this.state;
    console.log(dragY);
    const focused = dragY < 70 ? true : false;

    // Tell the parent to freeze on scroll
    this.props.onDragEnd();

    this.setState({
      isPressed: false,
      focused,
      dragY: focused ? 0 : DEFAULT_Y_POSITION,
    });
  };

  // Mouse methods
  // ==================
  handleMouseLeave = () => {
    console.log("leave");
    const { focused, shouldHide, timer } = this.state;

    // Clear the mouseover timer
    clearTimeout(timer);

    // Make sure this is necessary
    if (focused && shouldHide) {
      this.setState({ focused: false, shouldHide: true });
    }
  };

  showCard = () => {
    const { focused } = this.state;

    // Make sure this is necessary
    if (!focused) {
      this.setState({ focused: true });
    }
  };

  handleScroll = (e: React.SyntheticEvent<HTMLElement>) => {
    console.log("scroll");
    const element = e.currentTarget;
    const { shouldHide } = this.state;

    // If we are scrolled past the top
    if (element.scrollTop > 1) {
      this.showCard();

      // Update the state to make sure we _don't_ hide on MouseLeave
      if (shouldHide) {
        this.setState({ shouldHide: false });
      }
    } else {
      // We must update the state to ensure we tuck the card away on MouseLeave
      this.setState({ shouldHide: true });
    }
  };

  handleMouseEnter = () => {
    const { isPressed } = this.state;

    if (!isPressed) {
      const timer = setTimeout(this.showCard, 1000);

      // Stave the timer to clear it later
      this.setState({ timer });
    }
  };

  render() {
    const { events } = this.props;
    const { focused, dragY, isPressed } = this.state;

    const style = isPressed
      ? { y: spring(dragY) }
      : {
          y: spring(focused ? 0 : dragY),
        };

    return (
      <Motion defaultStyle={{ y: dragY }} style={style}>
        {(value: any) => (
          <Container
            key="contianer"
            style={{
              transform: `translateY(${value.y}px)`,
              overflowY: isPressed ? "hidden" : "scroll",
            }}
            onScroll={this.handleScroll}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
          >
            <MediaQuery minWidth={breakpoints.m} values={{ width: 1600 }}>
              {matches => {
                if (!matches) {
                  return (
                    <DragBar
                      onTouchStart={this.handleTouchStart}
                      onTouchEnd={this.handleTouchEnd}
                      onTouchMove={this.handleTouchMove}
                    />
                  );
                } else {
                  return null;
                }
              }}
            </MediaQuery>
            {events.map((event: Event) => {
              const key = toGlobalId({
                type: "Event",
                id: event.message,
              });

              return <ActivityFeedItem key={key} event={event} />;
            })}
          </Container>
        )}
      </Motion>
    );
  }
}
