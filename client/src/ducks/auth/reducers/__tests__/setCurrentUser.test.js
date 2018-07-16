import { expect } from "chai";
import { fromJS } from "immutable";

import { initialState } from "../../../auth";
import setCurrentUser from "../setCurrentUser";

describe("setCurrentUser", () => {
  it("stores currentUser", () => {
    const currentUser = {
      id: 2,
      email: "doody@blogless.com",
      jwt: "1234"
    };
    const newState = setCurrentUser(initialState, { payload: currentUser });
    expect(newState.get("currentUser").equals(fromJS(currentUser))).to.be.true;
  });
});
