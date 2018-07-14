import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fromJS } from "immutable";

import Post from "./index";
import PostPresenter from "./Presenter";
import NoPost from "./NoPost";

describe("<Post />", () => {
  describe("when the Posts is found", () => {
    const initialState = {
      posts: fromJS({
        posts: [
          {
            id: 1,
            title: "A really compelling blog post!",
            body: "Gosh you're a good reader!"
          },
          {
            id: 2,
            title: "Just as compelling a post!",
            body: "Gosh I'm a good writer!"
          }
        ],
        filter: ""
      })
    };

    it("renders Posts", () => {
      const wrapper = mount(
        <Provider store={{ ...createStore(state => state, initialState) }}>
          <MemoryRouter>
            <Post match={{ params: { id: "1" } }} />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(PostPresenter)).to.have.length(1);
      expect(wrapper.find(NoPost)).to.have.length(0);
    });
  });

  describe("when there are no Posts", () => {
    const initialState = {
      posts: fromJS({
        posts: [],
        filter: ""
      })
    };

    it("renders NoPosts", () => {
      const wrapper = mount(
        <Provider store={{ ...createStore(state => state, initialState) }}>
          <MemoryRouter>
            <Post match={{ params: { id: "1" } }} />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(PostPresenter)).to.have.length(0);
      expect(wrapper.find(NoPost)).to.have.length(1);
    });
  });
});
