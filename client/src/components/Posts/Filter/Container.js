import React from "react";
import { connect } from "react-redux";
import { setPostFilter } from "../../../actions";

import FilterPresenter from "./Presenter";

const Filter = props => {
  const onFilter = e => {
    props.dispatch(setPostFilter(e.target.value));
  };

  const clearFilter = () => {
    props.dispatch(setPostFilter(""));
  };

  return (
    <FilterPresenter
      onFilter={onFilter}
      clearFilter={clearFilter}
      currentFilter={props.currentFilter}
    />
  );
};

const mapStateToProps = state => {
  return {
    currentFilter: state.postFilter
  };
};

export default connect(mapStateToProps)(Filter);
