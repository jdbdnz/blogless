import { expect } from "chai";
import { fromJS } from "immutable";
import getPost from "../post";

describe("getPost", () => {
  it("gets post with specified id", () => {
    const expectedPost = {
      id: 1,
      title: "A really good post",
      body: "VERY Compelling"
    };
    const state = { posts: fromJS({ posts: [expectedPost], filter: "" }) };
    const post = getPost(state, "1");
    expect(post).to.be.deep.equal(expectedPost);
  });
});
