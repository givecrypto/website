import { shallow } from "enzyme";
import * as React from "react";
import Donors from "../../pages/donors";

describe("Index page", () => {
  it("renders without crashing", () => {
    window.scrollTo = jest.fn();

    shallow(<Donors />);
  });
});
