import * as React from "react";
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

// Styles
const Container = glamorous.section({
  zIndex: 99999,
  boxShadow: shadows.default,
  position: "fixed",
  right: Step(5),
  bottom: Step(5),
  maxWidth: 420,
  background: colors.white,
  textAlign: "center",
  border: `1px solid ${colors.black}`,
  borderRadius: "8px",
  borderColor: colors.grey,
  color: colors.blue,
  padding: Step(4),
});
const EventContainer = glamorous.section({
  textAlign: "left",
  color: colors.grey,
  fontSize: Step(3),
  paddingBottom: Step(4),
});

// The Component
export default class ActivityFeed extends React.Component<
  ActivityFeedProps,
  any
> {
  render() {
    const { events } = this.props;

    return (
      <Container>
        {events.map((event: Event) => {
          const timeAgo = moment(event.date).fromNow();
          return (
            <EventContainer>
              <h1>{event.message}</h1>
              <h4>{timeAgo}</h4>
            </EventContainer>
          );
        })}
      </Container>
    );
  }
}
