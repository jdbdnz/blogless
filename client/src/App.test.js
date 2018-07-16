import React from "react";
import moxios from "moxios";
import { MemoryRouter } from "react-router";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { createStore } from "redux";
import { fromJS } from "immutable";

import App from "./App";
import AppRouter from "./components/AppRouter";
import Loading from "./components/Loading";

describe("<App />", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  const dispatch = spy();
  const initialState = {
    posts: fromJS({ posts: [], filter: "" }),
    auth: fromJS({ currentUser: {} })
  };
  const reducer = state => state;
  const store = { ...createStore(reducer, initialState), dispatch };

  it("renders Loading", () => {
    const wrapper = mount(
      <Provider store={store}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </Provider>
    );
    expect(wrapper.find(Loading).exists()).to.true;
  });

  xit("renders AppRouter", () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // TODO: moxios return
    expect(wrapper.find(AppRouter).exists()).to.true;
  });
});
