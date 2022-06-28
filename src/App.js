import "./App.css";
import fccLogo from "./images/freecodecamp-logo.png";
import Button from "./components/button.jsx";
import Counter from "./components/counter.jsx";
import { useState } from "react";

function App() {
  const [clickTimes, setClickTimes] = useState(0);

  const clickEvent = () => {
    setClickTimes(clickTimes + 1);
  };

  const resetCounter = () => {
    setClickTimes(0);
  };

  const counter = () => {};

  return (
    <div className="App">
      <div className="fccLogoContainer">
        <img className="fccLogo" src={fccLogo} alt="Freecodecamp logo" />
      </div>
      <div className="mainContainer">
        <Counter clickTimes={clickTimes} />
        <Button texto="Click" clickButtonBool={true} clickEvent={clickEvent} />
        <Button
          texto="Reiniciar"
          clickButtonBool={false}
          clickEvent={resetCounter}
        />
      </div>
    </div>
  );
}

export default App;
