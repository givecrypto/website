import * as React from "react";
import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-136549352-1");
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

class Analytics extends React.Component {
  public componentDidMount() {
    // @ts-ignore
    if (!window.GA_INITIALIZED) {
      initGA();
      // @ts-ignore
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default Analytics;
