import {
  Event,
  TARGET_TYPE,
} from "../../components/ActivityFeed/ActivityFeedItem";

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
    message: "Jake tweeted about something funny.",
    date: "02-01-2019 10:00",
    targetID: "pretend-to-care",
    targetURL: "http://twitter.com/jakeleboeuf",
    targetType: TARGET_TYPE.external,
  },
  {
    message: "Joe W. donated $11m to August International for a new roof.",
    date: "01-21-2019",
  },
  {
    message:
      "Jake L. donated $1m to Living Hope International to fund 2019 donor events.",
    date: "01-19-2019",
  },
  {
    message:
      "Jake L. gave $12 (.0212 ETH) to Danny F. for Grassfed lLamb and Organic Kifer.",
    date: "01-03-2019",
  },
  {
    message:
      "Danny O. gave $126 (.1212 ETH) to Juanita W. for a new roof after hurricain Debby damaged her home. ",
    date: "12-09-2018",
  },
];

export default events;
