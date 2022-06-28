import React from "react";
import "../css/counter.css";

function Counter({ clickTimes }) {
  return <div className="Counter">{clickTimes}</div>;
}

export default Counter;
