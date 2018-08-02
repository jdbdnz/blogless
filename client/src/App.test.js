import React from "react";
import moxios from "moxios";
import { MemoryRouter } from "react-router";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fromJS } from "immutable";

import App from "./App";
import Loading from "./components/Loading";

describe("<App />", () => {
  beforeEach(() => {
    moxios.install();
    window.localStorage = {
      getItem: () => {},
      setItem: () => {}
    };
  });
  afterEach(() => moxios.uninstall());

  const dispatch = spy();
  const initialState = {
    posts: fromJS({ posts: [], filter: "" }),
    user: fromJS({ user: {} })
  };
  const reducer = state => state;
  const store = { ...createStore(reducer, initialState), dispatch };

  describe("when a user is not present", () => {
    it("prompts sign in", () => {
      const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(wrapper.text().includes("Sign in")).to.be.true;
    });
  });

  describe("when a user is present", () => {
    it("prompts to see posts", () => {
      const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(wrapper.text().includes("Posts")).to.be.true;
    });
  });
});
