import React from "react";
import PropTypes from "prop-types";
import { Icon, Input } from "antd";
import "./style.css";

class Presenter extends React.Component {
  render() {
    return (
      <div className="Filter">
        <Input
          placeholder="Search..."
          onChange={this.props.onFilter}
          ref={node => (this.filterInput = node)}
          suffix={
            this.props.currentFilter && (
              <Icon
                type="close"
                onClick={() => {
                  this.filterInput.input.value = "";
                  this.props.clearFilter();
                }}
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            )
          }
        />
      </div>
    );
  }
}

Presenter.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired
};

export default Presenter;
