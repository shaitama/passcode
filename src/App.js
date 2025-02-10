import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button onClick={() => clickHandler(label)}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("INPUT CODE");
  const [pin, setPin] = useState("1234567890");
  const [inputPin, setInputPin] = useState("");
  const [state, setState] = useState("waiting");

  const numClickHandler = (value) => {
    const updatedPin = inputPin + value;
    setInputPin(updatedPin);
    setDisp(updatedPin);
  };

  const enterClickHandler = () => {
    if (state === "waiting") {
      if (inputPin === pin) {
        setDisp("OPEN");
      } else {
        setDisp("LOCKED");
      }
      setState("done");
    } else if (state === "changeCurrentPin") {
      if (inputPin === pin) {
        setDisp("ENTER NEW CODE");
        setState("changeNewPin");
      } else {
        setDisp("INVALID CODE");
      }
    } else if (state === "changeNewPin") {
      if (inputPin.length >= 8) {
        setPin(inputPin);
        setDisp("CHANGE CODE SUCCESSFUL");
        setState("waiting");
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS");
      }
    }

    setInputPin("");
  };

  const resetClickHandler = () => {
    setDisp("INPUT CODE");
    setState("waiting");
    setInputPin("");
  };

  const pinClickHandler = () => {
    setDisp("ENTER CURRENT CODE");
    setState("changeCurrentPin");
    setInputPin("");
  };

  const nameClickHandler = () => {
    setDisp("FRUNEZ SHYNA CAYANAN");
  };

  const subjClickHandler = () => {
    setDisp("CPEITEL3");
  };

  return (
    <div className="App">
      <div className="Calc">
        <div className="Disp">
          {disp} { }
        </div>

        <div className="Buttons">
          <Key label={7} clickHandler={numClickHandler} />
          <Key label={8} clickHandler={numClickHandler} />
          <Key label={9} clickHandler={numClickHandler} />
          <Key label={4} clickHandler={numClickHandler} />
          <Key label={5} clickHandler={numClickHandler} />
          <Key label={6} clickHandler={numClickHandler} />
          <Key label={1} clickHandler={numClickHandler} />
          <Key label={2} clickHandler={numClickHandler} />
          <Key label={3} clickHandler={numClickHandler} />
          <Key label={"RESET"} clickHandler={resetClickHandler} />
          <Key label={0} clickHandler={numClickHandler} />
          <Key label={"ENTER"} clickHandler={enterClickHandler} />
          <Key label={"NAME"} clickHandler={nameClickHandler} />
          <Key label={"SUBJ"} clickHandler={subjClickHandler} />
          <Key label={"PIN"} clickHandler={pinClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;