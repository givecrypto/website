import ValidateRange from '../validators/ValidateRange';

describe('Validate Range :: Succeeds', () => {
  test('value is less than default max (8)', () => {
    expect(() => {
      ValidateRange(7);
    }).not.toThrow();
  });

  test('value if value is less than max (5)', () => {
    expect(() => {
      ValidateRange(4);
    }).not.toThrow();
  });

  test('value if value is greater than default min (0)', () => {
    expect(() => {
      ValidateRange(1);
    }).not.toThrow();
  });

  test('value if value is greater than min', () => {
    expect(() => {
      ValidateRange(1, 0);
    }).not.toThrow();
  });
});

describe('Validate Range :: Fails', () => {
  test('value is greater than default max (8)', () => {
    expect(() => {
      ValidateRange(9);
    }).toThrow();
  });

  test('value is greater than max', () => {
    expect(() => {
      ValidateRange(2, 0, 1);
    }).toThrow();
  });

  test('value is equal to max', () => {
    expect(() => {
      ValidateRange(8, 0, 8);
    }).toThrow();
  });

  test('value is less than default min (1)', () => {
    expect(() => {
      ValidateRange(0);
    }).toThrow();
  });

  test('value is equal to min', () => {
    expect(() => {
      ValidateRange(5, 5, 8);
    }).toThrow();
  });
});
