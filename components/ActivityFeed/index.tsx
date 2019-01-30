import * as React from "react";
import { Motion, spring } from "react-motion";
import moment from "moment";
import glamorous from "glamorous";
import { Step } from "../../utils/Scale";
import { colors, shadows } from "../../design-system";

// Types
export interface Event {
  date: string;
  message: string;
}
export interface ActivityFeedProps {
  events: Event[];
}

// Defaults
const DEFAULT_Y_POSITION = 155;

// Styles
const Container = glamorous.section({
  zIndex: 99999,
  boxShadow: shadows.default,
  overflowY: "scroll",
  position: "fixed",
  right: Step(5),
  bottom: Step(5),
  maxWidth: 420,
  height: 200,
  transform: `translateY(100px)`,
  background: colors.white,
  textAlign: "center",
  border: `1px solid ${colors.greyLighter}`,
  borderRadius: "8px",
  color: colors.blue,
  padding: `${Step(2)} ${Step(4)}`,
});
const EventContainer = glamorous.section({
  textAlign: "left",
  color: colors.grey,
  fontSize: Step(3),
  paddingBottom: Step(4),
  "&:first-child": {
    marginTop: Step(3),
  },
  "> h1": {
    fontWeight: "600",
    fontSize: Step(3.65, "rem"),
    lineHeight: Step(4.45),
    margin: 0,
    padding: `${Step(2)} 0`,
    color: colors.black,
  },
});
const DateContainer = glamorous.section({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});
const Bar = glamorous.div({
  height: 1,
  flex: "50 0 50%",
  marginRight: Step(3),
  background: colors.greyLighter,
});
const DateItem = glamorous.div({
  flex: "0 50 15%",
  "> h4": {
    color: colors.greyLight,
    padding: 0,
    margin: 0,
  },
});

// The Component
export default class ActivityFeed extends React.Component<
  ActivityFeedProps,
  any
> {
  // Default state
  state = {
    focused: false,
  };

  // The scroll handler: Should open when we begin to scroll,
  // and close when we reach the top of the container.
  handleScroll = (e: React.SyntheticEvent<HTMLElement>) => {
    const element = e.currentTarget;
    const { focused } = this.state;

    // Unelss we can actually scroll
    if (element.scrollTop > 0 && !focused) {
      this.setState({ focused: true });
    } else if (element.scrollTop < 5 && focused) {
      this.setState({ focused: false });
    }
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
            css={{ transform: `translateY(${value.y}px)` }}
            onScroll={this.handleScroll}
          >
            {events.map((event: Event, i) => {
              const timeAgo = moment(event.date).fromNow();
              return (
                <EventContainer key={i}>
                  <h1>{event.message}</h1>
                  <DateContainer>
                    <Bar />
                    <DateItem>
                      <h4>{timeAgo}</h4>
                    </DateItem>
                  </DateContainer>
                </EventContainer>
              );
            })}
          </Container>
        )}
      </Motion>
    );
  }
}
