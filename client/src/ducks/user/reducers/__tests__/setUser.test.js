import { expect } from "chai";
import { fromJS } from "immutable";

import { initialState } from "../../../user";
import setUser from "../setUser";

describe("set", () => {
  it("stores user", () => {
    const user = {
      id: 2,
      email: "doody@blogless.com",
      jwt: "1234"
    };
    const newState = setUser(initialState, { payload: user });
    expect(newState.get("user").equals(fromJS(user))).to.be.true;
  });
});
