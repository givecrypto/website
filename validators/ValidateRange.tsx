export const ValidateRange = (
  value: number,
  min: number = 0,
  max: number = 8
) => {
  // Throw an error on depth
  if (value >= max || value <= min) {
    // tslint:disable-next-line:max-line-length
    throw new Error(
      `You supplied ${value}. Value must be a range from ${min}-${max}.`
    );
  }
};

export default ValidateRange;
