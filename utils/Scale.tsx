import { Ratio, Scale } from "natural-scale";
export const Interval = Ratio.MINOR_SEVENTH;
export const Step = Scale(Interval, "rem");
export default { Step, Interval };
