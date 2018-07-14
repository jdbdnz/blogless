import { expect } from "chai";
import { fromJS } from "immutable";

import { initialState } from "../../../posts";
import setFilter from "../setFilter";

describe("setFilter", () => {
  it("stores filter", () => {
    const filter =
      "a good way to procrastinate writing blogposts is to make a blogging platform";
    const newState = setFilter(initialState, { payload: filter });
    expect(newState.get("filter")).to.equal(filter);
  });
});
