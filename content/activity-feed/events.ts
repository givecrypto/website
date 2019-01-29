import { Event } from "components/ActivityFeed";

/**
 * @description Activity Feed Events
 * @param {message} string
 * @param {date} date
 *
 * @example: {
 *  message: 'Jake L. donated $1m to Living Hope International to fund 2019 events.',
 *  date: 'MM-DD-YYYY'
 * }
 */

const events: Event[] = [
  {
    message:
      "Jake L. donated $1m to Living Hope International to fund 2019 events.",
    date: "01-21-2019",
  },
  {
    message: "Joe W. donated $11m to August International for a new roof.",
    date: "01-19-2019",
  },
];

export default events;
