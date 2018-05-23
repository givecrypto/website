import { rehydrate } from 'glamor';

declare global {
  interface Window {
    __NEXT_DATA__: {
      ids: string[];
    };
  }
}

const loadStyles = () => {
  if (typeof window !== 'undefined') {
    window.__NEXT_DATA__ = window.__NEXT_DATA__ || { ids: ['test-element-id'] };
    rehydrate(window.__NEXT_DATA__.ids);
  }
};

export default loadStyles();
