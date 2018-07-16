import { connect } from "react-redux";
import { selector } from "../../ducks/auth";
import Home from "./Presenter";

const mapStateToProps = state => {
  const currentUser = selector.getCurrentUser(state);
  const hasCurrentUser = selector.hasCurrentUser(state);

  return {
    currentUser,
    hasCurrentUser
  };
};

export default connect(mapStateToProps)(Home);
