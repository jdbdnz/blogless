import React from "react";
import Date from "../../../Date";
import "./style.css";

const Presenter = ({ date }) => (
  <div className="Posts-Post-Meta">
    {date ? (
      <div>
        Published <Date date={date} />
      </div>
    ) : (
      "Draft"
    )}
  </div>
);

export default Presenter;
