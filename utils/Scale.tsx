import { Scale, Ratio } from 'natural-scale';
export const Interval = Ratio.GOLDEN_RATIO;
export const Step = Scale(Interval, 'rem');
export default { Step, Interval };
