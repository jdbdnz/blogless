import { expect } from "chai";
import { fromJS } from "immutable";
import { getUser } from "../user";

describe("getUser", () => {
  it("gets the user", () => {
    const user = {
      id: 1,
      email: "howdy@blogless.co",
      jwt: "12345"
    };
    const state = { user: fromJS({ user }) };
    const result = getUser(state);
    expect(result).to.eql(user);
  });
});
