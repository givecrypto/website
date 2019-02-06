import * as React from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<{}, State> {
  public readonly state: Readonly<State> = {
    hasError: false,
  };

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Display fallback UI
    console.log(error, info); // tslint:disable-line:no-console
    this.setState({ hasError: true });
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
