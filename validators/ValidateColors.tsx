import { ColorProps as Props } from '../types';

// tslint:disable:max-line-length
export const ValidateColors = (props: Props) => {
  if (
    (props.baseColor &&
      !props.baseColor.match(
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb)?\((-?\d+%?[,\s]+){2}\s*[\d\.]+%?\)|(rgba)?\((-?\d+%?[,\s]+){3}\s*[\d\.]+%?\))$/
      )) ||
    (props.primaryColor &&
      !props.primaryColor.match(
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb)?\((-?\d+%?[,\s]+){2}\s*[\d\.]+%?\)|(rgba)?\((-?\d+%?[,\s]+){3}\s*[\d\.]+%?\))$/
      )) ||
    (props.secondaryColor &&
      !props.secondaryColor.match(
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb)?\((-?\d+%?[,\s]+){2}\s*[\d\.]+%?\)|(rgba)?\((-?\d+%?[,\s]+){3}\s*[\d\.]+%?\))$/
      )) ||
    (props.tertiaryColor &&
      !props.tertiaryColor.match(
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb)?\((-?\d+%?[,\s]+){2}\s*[\d\.]+%?\)|(rgba)?\((-?\d+%?[,\s]+){3}\s*[\d\.]+%?\))$/
      ))
  ) {
    throw new Error('Make sure you pass a color 🙆');
  }
};

export default ValidateColors;
