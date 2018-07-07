import React from "react";
import Moment from "moment";
import "./style.css";

const Presenter = ({ date }) => (
  <div className="Date">{Moment(date).format("MMMM Do YYYY, h:mm:ss a")}</div>
);

export default Presenter;
