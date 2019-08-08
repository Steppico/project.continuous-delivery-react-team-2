import React from "react";
import { mount, configure } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("The App Component", () => {
  it("renders the App component", () => {
    const wrapper = mount(<App locations="[]" />);
    expect(wrapper.find(".App").exists()).toEqual(true);
  });
});
