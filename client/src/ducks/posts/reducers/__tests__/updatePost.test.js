import { expect } from "chai";
import { fromJS } from "immutable";

import updatePost from "../updatePost";

describe("updatePost", () => {
  it("merges attributes with a post with a matching id", () => {
    const originalPost = {
      id: 1,
      title: "A really good post",
      body: "VERY Compelling"
    };
    const initialState = fromJS({ posts: [originalPost], filter: "" });

    const expectedPost = {
      id: 1,
      title: "An even better post",
      body: originalPost.body
    };

    const action = {
      payload: {
        id: 1,
        title: expectedPost.title
      }
    };

    const newState = updatePost(initialState, action);
    expect(newState.get("posts").equals(fromJS([expectedPost]))).to.be.true;
  });
});
