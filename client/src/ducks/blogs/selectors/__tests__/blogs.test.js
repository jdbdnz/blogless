import { expect } from "chai";
import { fromJS } from "immutable";
import getBlogs from "../blogs";

describe("getBlogs", () => {
  const blogs = [
    {
      id: 1,
      name: "A really good blog",
      description: "VERY Compelling"
    },
    {
      id: 2,
      name: "An excellent addition to the ol' blog collection",
      description: "Even more bloggy, if you'll believe it"
    }
  ];

  it("gets all blog ", () => {
    const state = { blogs: fromJS({ blogs: blogs }) };
    const result = getBlogs(state);
    expect(result).to.eql(blogs);
  });
});
