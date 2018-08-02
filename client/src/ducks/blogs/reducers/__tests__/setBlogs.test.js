import { expect } from "chai";
import { fromJS } from "immutable";

import { initialState } from "../../../blogs";
import setBlogs from "../setBlogs";

describe("setBlogs", () => {
  it("stores blogs in an Immutable List", () => {
    const blogs = [
      { id: 1, name: "A really good blog", description: "VERY Compelling" }
    ];
    const newState = setBlogs(initialState, { payload: blogs });
    expect(newState.get("blogs").equals(fromJS(blogs))).to.be.true;
  });
});
