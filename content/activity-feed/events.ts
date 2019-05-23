import {
  Event,
  TARGET_TYPE,
} from "../../components/ActivityFeed/ActivityFeedItem";
import { toGlobalId } from "../../utils/globalId";

/**
 * @description Activity Feed Events
 * @param {message} string
 * @param {date} date
 *
 * @example: {
 *  message: "Jake L. donated $1m to Living Hope International to fund 2019 events.",
 *  date: "YYYY-MM-DD" or "YYYY-MM-DD HH:MM" to specify a time
 * }
 */

const events: Event[] = [
  {
    message: "Jake tweeted about something funny.",
    date: "2019-02-01 10:00",
    targetID: toGlobalId({ type: "Tweet", id: "jakeleboeuf" }), // We're not currently doing anything with this ¯\_(ツ)_/¯
    targetURL: "http://twitter.com/jakeleboeuf",
    targetType: TARGET_TYPE.external,
  },
  {
    message: "Joe W. donated $11m to August International for a new roof.",
    date: "2019-01-21",
  },
  {
    message:
      "Jake L. donated $1m to Living Hope International to fund 2019 donor events.",
    date: "2019-01-19",
  },
  {
    message:
      "Jake L. gave $12 (.0212 ETH) to Danny F. for Grassfed lLamb and Organic Kifer.",
    date: "2019-01-03",
  },
  {
    message:
      "Danny O. gave $126 (.1212 ETH) to Juanita W. for a new roof after hurricain Debby damaged her home. ",
    date: "2018-12-09",
  },
];

export default events;
