import * as React from "react";
import ReactGA from "react-ga";
const { GOOGLE_PROPERTY_ID } = process.env;

export const initGA = () => {
  if (GOOGLE_PROPERTY_ID) {
    ReactGA.initialize(GOOGLE_PROPERTY_ID);
  }
};

export const logPageView = () => {
  if (GOOGLE_PROPERTY_ID) {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
};

class Analytics extends React.Component {
  public componentDidMount() {
    if (GOOGLE_PROPERTY_ID) {
      // @ts-ignore
      if (!window.GA_INITIALIZED) {
        initGA();
        // @ts-ignore
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }

  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default Analytics;
