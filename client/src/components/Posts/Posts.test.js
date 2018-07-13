import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { fromJS } from "immutable";

import Posts from "./index";
import PostsPost from "./Post";
import NoPosts from "./NoPosts";

describe("<Posts />", () => {
  describe("when there are Posts", () => {
    const initialState = {
      postFilter: "",
      posts: fromJS([
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
      ])
    };

    it("renders Posts", () => {
      const wrapper = mount(
        <Provider store={{ ...createStore(state => state, initialState) }}>
          <MemoryRouter>
            <Posts />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(Posts)).to.have.length(1);
      expect(wrapper.find(PostsPost)).to.have.length(2);
      expect(wrapper.find(NoPosts)).to.have.length(0);
    });
  });

  describe("when there are no Posts", () => {
    const initialState = {
      postFilter: "",
      posts: fromJS([])
    };

    it("renders NoPosts", () => {
      const wrapper = mount(
        <Provider store={{ ...createStore(state => state, initialState) }}>
          <MemoryRouter>
            <Posts />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(Posts)).to.have.length(1);
      expect(wrapper.find(PostsPost)).to.have.length(0);
      expect(wrapper.find(NoPosts)).to.have.length(1);
    });
  });
});
