import * as moment from "moment";
import * as React from "react";

// Styled Components
import {
  Bar,
  DateContainer,
  DateItem,
  EventContainer,
  EventLink,
  EventMessage,
} from "./components";

// Types
export enum TARGET_TYPE {
  payment,
  external,
}
export interface Event {
  date: string;
  message: string;
  targetURL?: string;
  targetID?: string;
  targetType?: TARGET_TYPE;
}
interface ActivityFeedItemProps {
  event: Event;
}

const ActivityFeedItem: React.SFC<ActivityFeedItemProps> = props => {
  const { event } = props;

  // Grab the date and make it pretty
  let timeAgo = moment(event.date).fromNow();
  timeAgo = timeAgo[0].toUpperCase() + timeAgo.substr(1);

  return (
    <EventContainer>
      <EventMessage>
        {event.targetType === TARGET_TYPE.external ? (
          <EventLink href={event.targetURL}>{event.message}</EventLink>
        ) : (
          event.message
        )}
      </EventMessage>
      <DateContainer>
        <Bar />
        <DateItem>{timeAgo}</DateItem>
      </DateContainer>
    </EventContainer>
  );
};

export default ActivityFeedItem;
