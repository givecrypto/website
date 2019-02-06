import { Ratio, Scale } from "natural-scale";
export const Interval = Ratio.MINOR_SEVENTH;
export const Step = Scale({ interval: Interval, unit: "rem" });
export default { Step, Interval };
