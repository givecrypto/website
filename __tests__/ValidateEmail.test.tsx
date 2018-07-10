import ValidateEmail from '../validators/ValidateEmail';

describe('Validate Email :: Succeeds', () => {
  test('.com tld', () => {
    expect(() => {
      ValidateEmail('jakel@realthread.com');
    }).toBeTruthy();
  });

  test('.co tld', () => {
    expect(() => {
      ValidateEmail('jakel@realthread.co');
    }).toBeTruthy();
  });

  test('.io tld', () => {
    expect(() => {
      ValidateEmail('jakel@realthread.io');
    }).toBeTruthy();
  });

  test('.world tld', () => {
    expect(() => {
      ValidateEmail('jakel@realthread.world');
    }).toBeTruthy();
  });
});

describe('Validate Email :: Fails', () => {
  test('missing @', () => {
    expect(ValidateEmail('jakelrealthread.com')).toBeFalsy();
  });

  test('missing tld', () => {
    expect(ValidateEmail('jakel@realthread.')).toBeFalsy();
  });

  test('missing .', () => {
    expect(ValidateEmail('jakel@realthreadcom')).toBeFalsy();
  });

  test('empty', () => {
    expect(ValidateEmail('')).toBeFalsy();
  });
});
