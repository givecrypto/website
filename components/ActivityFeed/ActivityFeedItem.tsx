import * as React from "react";
import moment from "moment";
import { toGlobalId } from "../../utils/globalId";

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
  const key = toGlobalId({ type: "Event", id: event.message });

  return (
    <EventContainer key={key}>
      <EventMessage>{event.message}</EventMessage>
      <DateContainer>
        <Bar />
        <DateItem>{timeAgo}</DateItem>
      </DateContainer>
    </EventContainer>
  );
};

export default ActivityFeedItem;
