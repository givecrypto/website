import ValidateColors from '../validators/ValidateColors';

describe('Validate Colors :: Succeeds', () => {
  const valid = {
    format: {
      primaryColor: '#fff'
    },
    rgb: {
      primaryColor: 'rgb(0,0,0)'
    },
    rgba: {
      primaryColor: 'rgba(0,0,0,0)'
    },
  };

  test('rgb', () => {
    expect(() => {
      ValidateColors(valid.rgb);
    }).not.toThrow();
  });

  test('rgba has alpha', () => {
    expect(() => {
      ValidateColors(valid.rgba);
    }).not.toThrow();
  });

  test('value is hex, rgb or rgba', () => {
    expect(() => {
      ValidateColors(valid.format);
    }).not.toThrow();
  });

});

describe('Validate Colors :: Fails', () => {
  const invalid = {
    format: {
      primaryColor: 'white'
    },
    rgb: {
      primaryColor: 'rgb(0,0,0,0)'
    },
    rgba: {
      primaryColor: 'rgba(0,0,0)'
    },
  };

  test('rgb has alpha', () => {
    expect(() => {
      ValidateColors(invalid.rgb);
    }).toThrow();
  });

  test('rgba has no alpha', () => {
    expect(() => {
      ValidateColors(invalid.rgba);
    }).toThrow();
  });

  test('value is not hex, rgb or rgba', () => {
    expect(() => {
      ValidateColors(invalid.format);
    }).toThrow();
  });
});
