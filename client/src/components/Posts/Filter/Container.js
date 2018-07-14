import React from "react";
import { connect } from "react-redux";
import { selector, setFilter } from "../../../ducks/posts";

import FilterPresenter from "./Presenter";

const Filter = props => {
  const onFilter = e => {
    props.dispatch(setFilter(e.target.value));
  };

  const clearFilter = () => {
    props.dispatch(setFilter(""));
  };

  return (
    <FilterPresenter
      onFilter={onFilter}
      clearFilter={clearFilter}
      filter={props.filter}
    />
  );
};

const mapStateToProps = state => {
  const filter = selector.getFilter(state);
  return { filter };
};

export default connect(mapStateToProps)(Filter);
