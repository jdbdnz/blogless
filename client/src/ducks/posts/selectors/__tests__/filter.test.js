import { expect } from "chai";
import { fromJS } from "immutable";
import getFilter from "../filter";

describe("getFilter", () => {
  it("gets the filter", () => {
    const filter = "hi";
    const state = { posts: fromJS({ posts: [], filter }) };
    const result = getFilter(state);
    expect(result).to.equal(filter);
  });
});
