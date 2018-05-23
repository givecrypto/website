import { rehydrate } from 'glamor';

declare global {
  interface Window {
    __NEXT_DATA__: any;
  }
}

const loadStyles = () => {
  if (typeof window !== 'undefined') {
    window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
    rehydrate(window.__NEXT_DATA__.ids);
  }
};

export default loadStyles();
