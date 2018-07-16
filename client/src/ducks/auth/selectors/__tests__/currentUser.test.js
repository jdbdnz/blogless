import { expect } from "chai";
import { fromJS } from "immutable";
import getCurrentUser from "../currentUser";

describe("getCurrentUser", () => {
  it("gets the currentUser", () => {
    const currentUser = {
      id: 1,
      email: "howdy@blogless.co",
      jwt: "12345"
    };
    const state = { auth: fromJS({ currentUser }) };
    const result = getCurrentUser(state);
    expect(result).to.eql(currentUser);
  });
});
