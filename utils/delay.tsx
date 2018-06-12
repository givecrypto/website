export class CancelError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CancelError';
  }
}

const createDelay = (willResolve: any) => (ms: number, value?: any) => {
  let timeoutId: any;
  let internalReject: any;

  const delayPromise: any = new Promise((resolve, reject) => {
    internalReject = reject;

    timeoutId = setTimeout(() => {
      const settle = willResolve ? resolve : reject;
      settle(value);
    }, ms); // tslint:disable-line
  });

  delayPromise.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
      internalReject(new CancelError('Delay canceled'));
    }
  };

  return delayPromise;
};

export default createDelay(true);
export const Reject = createDelay(false);
