import React from "react";
import "../css/button.css";

function Button({ texto, clickButtonBool, clickEvent }) {
  return (
    <button
      className={clickButtonBool ? "clickButton" : "resetButton"}
      onClick={clickEvent}
    >
      {texto}
    </button>
  );
}

export default Button;
