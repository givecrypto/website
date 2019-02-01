import * as React from "react";
import moment from "moment";

// Styled Components
import {
  EventContainer,
  DateContainer,
  Bar,
  DateItem,
  EventMessage,
} from "./components";

// Types
export interface Event {
  date: string;
  message: string;
}
interface ActivityFeedItemProps {
  event: Event;
}

const ActivityFeedItem: React.SFC<ActivityFeedItemProps> = props => {
  const { event } = props;
  const timeAgo = moment(event.date).fromNow();

  return (
    <EventContainer>
      <EventMessage>{event.message}</EventMessage>
      <DateContainer>
        <Bar />
        <DateItem>{timeAgo}</DateItem>
      </DateContainer>
    </EventContainer>
  );
};

export default ActivityFeedItem;
