import { shallow } from "enzyme";
import * as React from "react";
import App from "../../pages/index";

describe("Index page", () => {
  it("renders without crashing", () => {
    window.scrollTo = jest.fn();

    shallow(<App />);
  });
});
