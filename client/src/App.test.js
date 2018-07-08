import React from "react";
import { MemoryRouter } from "react-router";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import moxios from "moxios";

import App from "./App";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";

const postMock = {
  id: 2,
  title: "Everyday selvage meggings pitchfork farm-to-table sriracha kombucha.",
  body:
    "Diy farm-to-table bespoke. Yuccie pabst venmo carry celiac mlkshk umami chicharrones. Intelligentsia blue bottle brunch biodiesel. Whatever trust fund neutra try-hard pitchfork chillwave. Kombucha blog microdosing pickled.",
  draft: false,
  blog_id: 5,
  created_at: "2018-07-06T00:52:21.193Z",
  updated_at: "2018-07-06T00:52:21.193Z"
};

describe("<App />", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it("renders a Header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).exists()).to.true;
  });

  describe("route /", () => {
    it("renders Posts", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      );

      moxios.wait(function() {
        moxios.requests
          .mostRecent()
          .respondWith({
            status: 200,
            response: [postMock]
          })
          .then(() => {
            expect(wrapper.find(Posts).exists()).be.true;
          });
      });
    });
  });

  describe("route /posts/:id", () => {
    it("renders Post", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/posts/1"]}>
          <App />
        </MemoryRouter>
      );

      moxios.wait(function() {
        moxios.requests
          .mostRecent()
          .respondWith({
            status: 200,
            response: postMock
          })
          .then(() => {
            expect(wrapper.find(Post).exists()).be.true;
          });
      });
    });
  });
});
