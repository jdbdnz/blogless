import { expect } from "chai";
import { fromJS } from "immutable";
import getBlog from "../blog";

describe("getBlog", () => {
  it("gets blog with specified id", () => {
    const expectedBlog = {
      id: 1,
      name: "A really good blog",
      description: "VERY Compelling"
    };
    const state = { blogs: fromJS({ blogs: [expectedBlog] }) };
    const blog = getBlog(state, "1");
    expect(blog).to.be.deep.equal(expectedBlog);
  });
});
