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
import AppRouter from "./components/AppRouter";

describe("<App />", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const dispatch = spy();
  const initialState = { posts: fromJS({ posts: [], filter: "" }) };
  const reducer = state => state;
  const store = { ...createStore(reducer, initialState), dispatch };

  it("renders AppRouter", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(AppRouter).exists()).to.true;
  });
});
