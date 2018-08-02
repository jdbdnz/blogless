import React from "react";
import moxios from "moxios";
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
  beforeEach(() => {
    moxios.install();
    window.localStorage = {
      getItem: () => {},
      setItem: () => {}
    };
  });
  afterEach(() => moxios.uninstall());

  describe("when there are Posts", () => {
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
            <Posts match={{ params: { blog_id: "1" } }} />
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
      posts: fromJS({
        posts: [],
        filter: ""
      })
    };

    it("renders NoPosts", done => {
      const wrapper = mount(
        <Provider store={{ ...createStore(state => state, initialState) }}>
          <MemoryRouter>
            <Posts match={{ params: { blog_id: "1" } }} />
          </MemoryRouter>
        </Provider>
      );
      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: []
          })
          .then(() => {
            wrapper.update();
            expect(wrapper.find(Posts)).to.have.length(1);
            expect(wrapper.find(PostsPost)).to.have.length(0);
            expect(wrapper.find(NoPosts)).to.have.length(1);
            done();
          });
      });
    });
  });
});
