import { expect } from "chai";
import { fromJS } from "immutable";

import updateBlog from "../updateBlog";

describe("updateBlog", () => {
  it("merges attributes with a blog with a matching id", () => {
    const originalBlog = {
      id: 1,
      name: "A really good blog",
      description: "VERY Compelling"
    };
    const initialState = fromJS({ blogs: [originalBlog] });

    const expectedBlog = {
      id: 1,
      name: "An even better blog",
      description: originalBlog.description
    };

    const action = {
      payload: {
        id: 1,
        name: expectedBlog.name
      }
    };

    const newState = updateBlog(initialState, action);
    expect(newState.get("blogs").equals(fromJS([expectedBlog]))).to.be.true;
  });
});
