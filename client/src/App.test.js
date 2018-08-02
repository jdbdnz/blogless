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

  describe("when a user is not present", () => {
    const dispatch = spy();
    const initialState = {
      blogs: fromJS({ blogs: [] }),
      posts: fromJS({ posts: [], filter: "" }),
      user: fromJS({ user: {} })
    };
    const reducer = state => state;
    const store = { ...createStore(reducer, initialState), dispatch };

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
    const dispatch = spy();
    const initialState = {
      blogs: fromJS({ blogs: [] }),
      posts: fromJS({ posts: [], filter: "" }),
      user: fromJS({ user: { id: 2, email: "hi@blogless.com" } })
    };
    const reducer = state => state;
    const store = { ...createStore(reducer, initialState), dispatch };

    it("displays blog management", () => {
      const wrapper = mount(
        <Provider store={store}>
          <App />
        </Provider>
      );
      expect(wrapper.text().includes("New Blog")).to.be.true;
    });
  });
});
