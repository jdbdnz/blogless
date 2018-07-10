import React from "react";
import Moment from "moment";
import TimeAgo from "react-timeago";
import "./style.css";

const Presenter = ({ date }) => {
  const localDate = Moment(date).local();
  return (
    <TimeAgo
      date={localDate}
      title={localDate.format("MMMM Do YYYY, h:mm:ss a")}
      className="Date"
    />
  );
};

export default Presenter;
