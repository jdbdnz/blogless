import { expect } from "chai";
import { fromJS } from "immutable";
import getPosts from "../posts";

describe("getPosts", () => {
  const posts = [
    {
      id: 1,
      title: "A really good post",
      body: "VERY Compelling"
    },
    {
      id: 2,
      title: "An excellent follow up",
      body: "Even more compelling, if you'll believe it"
    }
  ];

  it("gets all post ", () => {
    const state = { posts: fromJS({ posts: posts, filter: "" }) };
    const result = getPosts(state);
    expect(result).to.eql(posts);
  });

  describe("with a filter", () => {
    const state = { posts: fromJS({ posts: posts, filter: "believe" }) };
    const result = getPosts(state);
    expect(result).to.eql([posts[1]]);
  });
});
