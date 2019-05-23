import * as React from "react";
import { Motion, spring } from "react-motion";
import MediaQuery from "react-responsive";
import { breakpoints } from "../../design-system/breakpoints";
import { toGlobalId } from "../../utils/globalId";
import ActivityFeedItem, { Event } from "./ActivityFeedItem";

// Styled Components
import {
  Container,
  DragBar,
  DragBarContainer,
  DragBarSpace,
  List,
} from "./components";

// Default Values
const DEFAULT_Y_POSITION = 155;

// Types
export interface ActivityFeedProps {
  events: Event[];
  onDragStart: () => void;
  onDragEnd: () => void;
}
export interface ActivityFeedState {
  touchStartPosition: number;
  shouldHide: boolean;
  focused: boolean;
  isPressed?: boolean;
  dragY?: number;
}

export default class ActivityFeed extends React.Component<
  ActivityFeedProps,
  ActivityFeedState
> {
  // Initial state
  public state: ActivityFeedState = {
    touchStartPosition: 0,
    isPressed: false,
    shouldHide: true,
    focused: false,
    dragY: 240,
  };

  // A timer for opening the card
  private timer: NodeJS.Timer = null;

  // I hate refs... but here we are...
  // We need to use a ref to preventDefault() on scroll
  private dragHandleRef = React.createRef<HTMLDivElement>();
  public componentDidMount() {
    // get the screen size
    const mql = window.matchMedia(`(max-width: ${breakpoints.ns})`);
    // Creeate a listener
    mql.addListener(this.watchListeners);

    // Guard against large screens, and add a touch listener
    if (mql.matches) {
      this.dragHandleRef.current.addEventListener(
        "touchmove",
        this.handleTouchMove,
        false,
      );
    }

    // Animate the card in
    setTimeout(this.dockCard, 2000);
  }

  public watchListeners = (e: MediaQueryListEvent) => {
    // Probably unneeded guard, but just to be safe
    if (this.dragHandleRef.current) {
      if (e.matches) {
        this.dragHandleRef.current.addEventListener(
          "touchmove",
          this.handleTouchMove,
          false,
        );
      } else {
        this.dragHandleRef.current.removeEventListener(
          "touchmove",
          this.handleTouchMove,
        );
      }
    }
  };

  public handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    const { clientY } = e.touches[0];
    const { focused } = this.state;
    const { onDragStart } = this.props;

    // Prevent the page from scrolling
    onDragStart();

    // Update state
    this.setState({
      touchStartPosition: clientY - (focused ? 0 : DEFAULT_Y_POSITION),
      isPressed: true,
    });
  };

  public handleTouchMove = (e: TouchEvent) => {
    // Don't scroll any containers while dragging
    if (e.cancelable) {
      e.preventDefault();
    }

    const { clientY } = e.touches[0];
    const { touchStartPosition, isPressed } = this.state;

    if (isPressed) {
      this.setState({ dragY: clientY - touchStartPosition });
    }
  };

  public handleTouchEnd = () => {
    const { dragY } = this.state;
    const { onDragEnd } = this.props;

    // Allow the page resume scrolling
    onDragEnd();

    // Did we drag above the threshold? If so,
    // we'll focus the card- otherwise, hide!
    const focused = Boolean(dragY < 70);

    this.setState({
      isPressed: false,
      focused,
      dragY: focused ? 0 : DEFAULT_Y_POSITION,
    });
  };

  // Mouse methods
  // ==================
  public handleMouseLeave = () => {
    const { focused, shouldHide } = this.state;

    // Clear the mouseover timer
    clearTimeout(this.timer);

    // If we're in view, & should be hiding... hide
    if (focused && shouldHide) {
      this.setState({ focused: false, shouldHide: true });
    }
  };

  public dockCard = () => {
    // Make sure this is necessary
    this.setState({ dragY: DEFAULT_Y_POSITION });
  };

  public showCard = () => {
    const { focused } = this.state;

    // Make sure this is necessary
    if (!focused) {
      this.setState({ focused: true });
    }
  };

  public toggleCard = () => {
    const { focused } = this.state;

    this.setState({ focused: !focused });
  };

  public handleScroll = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();

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

  // Show the card if the user hovers for 1 second
  public handleMouseEnter = () => {
    const { isPressed } = this.state;

    if (!isPressed) {
      this.timer = setTimeout(this.showCard, 1000);
    }
  };

  public render() {
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
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
          >
            <MediaQuery minWidth={breakpoints.ns}>
              {matches => {
                if (!matches) {
                  return (
                    <DragBarContainer
                      ref={this.dragHandleRef}
                      onClick={this.toggleCard}
                      onTouchStart={this.handleTouchStart}
                      onTouchEnd={this.handleTouchEnd}
                    >
                      <DragBar />
                      <DragBarSpace />
                    </DragBarContainer>
                  );
                } else {
                  return null;
                }
              }}
            </MediaQuery>
            <List onScroll={this.handleScroll}>
              {events.map((event: Event) => {
                const key = toGlobalId({
                  type: "Event",
                  id: event.message,
                });

                return <ActivityFeedItem key={key} event={event} />;
              })}
            </List>
          </Container>
        )}
      </Motion>
    );
  }
}
