import * as React from "react";
import { Motion, spring } from "react-motion";
import ActivityFeedItem, { Event } from "./ActivityFeedItem";
import { toGlobalId } from "../../utils/globalId";
// Styled Components
import { Container } from "./components";

// Default Values
const DEFAULT_Y_POSITION = 155;

// Types
export interface ActivityFeedProps {
  events: Event[];
}
export interface ActivityFeedState {
  shouldHide: boolean;
  focused: boolean;
  timer?: NodeJS.Timer;
}

export default class ActivityFeed extends React.Component<
  ActivityFeedProps,
  ActivityFeedState
> {
  // Initial state
  state: ActivityFeedState = {
    shouldHide: true,
    focused: false,
    timer: null,
  };

  handleMouseLeave = () => {
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
    const timer = setTimeout(this.showCard, 1000);

    // Stave the timer to clear it later
    this.setState({ timer });
  };

  render() {
    const { events } = this.props;
    const { focused } = this.state;

    return (
      <Motion
        defaultStyle={{ y: DEFAULT_Y_POSITION }}
        style={{ y: spring(focused ? 0 : DEFAULT_Y_POSITION) }}
      >
        {(value: any) => (
          <Container
            key="contianer"
            style={{ transform: `translateY(${value.y}px)` }}
            onScroll={this.handleScroll}
            onMouseLeave={this.handleMouseLeave}
            onMouseEnter={this.handleMouseEnter}
          >
            {events.map((event: Event) => {
              const key = toGlobalId({
                type: "Event",
                id: event.message.replace(" ", "-"),
              });

              return <ActivityFeedItem key={key} event={event} />;
            })}
          </Container>
        )}
      </Motion>
    );
  }
}
