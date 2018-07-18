import { connect } from "react-redux";
import { selector } from "../../ducks/user";
import Home from "./Presenter";

const mapStateToProps = state => {
  const user = selector.getUser(state);
  const hasUser = selector.hasUser(state);

  return {
    user,
    hasUser
  };
};

export default connect(mapStateToProps)(Home);
