export const breakpoints = {
  ns: '30em',
  m: '60em'
};

export const mediaQueries = {
  s: `@media only screen and (max-width: ${breakpoints.ns})`,
  ns: `@media only screen and (min-width: ${breakpoints.ns})`,
  m: `@media only screen and (min-width: 30em) and (max-width: ${
    breakpoints.m
  })`,
  l: `@media only screen and (min-width: ${breakpoints.m})`
};

export default mediaQueries;
