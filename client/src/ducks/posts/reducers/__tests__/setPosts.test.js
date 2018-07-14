import { expect } from "chai";
import { fromJS } from "immutable";

import { initialState } from "../../../posts";
import setPosts from "../setPosts";

describe("setPosts", () => {
  it("stores posts in an Immutable List", () => {
    const posts = [
      { id: 1, title: "A really good post", body: "VERY Compelling" }
    ];
    const newState = setPosts(initialState, { payload: posts });
    expect(newState.get("posts").equals(fromJS(posts))).to.be.true;
  });
});
