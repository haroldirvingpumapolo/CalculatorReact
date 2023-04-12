import React, { useState } from "react";
import CalculatorButtons from "./CalculatorButtons";

function Calculator() {
  const [showNumbers, setShowNumbers] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [response, setResponse] = useState("");

  function resetResponse() {
    setShowNumbers("");
    setPrevNumber("");
    setOperation("");
    setResponse("");
  }

  function alterNegativeAndPositive() {
    if (
      (!isNaN(response) && response !== "") ||
      (!isNaN(prevNumber) && prevNumber !== "")
    ) {
      if (!isNaN(prevNumber) && response == "") {
        const newValue = parseFloat(prevNumber) * -1;
        setPrevNumber(newValue.toString());
        setShowNumbers(newValue.toString());
      } else {
        const newValue = parseFloat(response) * -1;
        setResponse(newValue.toString());
        setShowNumbers(newValue.toString());
      }
    }
  }

  function percent() {
    if (!isNaN(parseFloat(prevNumber))) {
      setPrevNumber(eval(prevNumber + "/100"));
      setShowNumbers(eval(prevNumber + "/100"));
    }
  }

  function decimal() {
    if (!prevNumber.includes(".")) {
      if (prevNumber === "") {
        setPrevNumber(`0${prevNumber}.`);
        setShowNumbers(`0${prevNumber}.`);
        setResponse("");
      } else {
        setPrevNumber(`${prevNumber}.`);
        setShowNumbers(`${prevNumber}.`);
      }
    }
  }
  function calculatingButton(calculatingValue) {
    if (!isNaN(parseFloat(prevNumber))) {
      setShowNumbers(eval(response + operation + prevNumber));
      setResponse(eval(response + operation + prevNumber));
      setOperation(calculatingValue);
      setPrevNumber("");
    }
    if (!isNaN(parseFloat(response))) {
      setOperation(calculatingValue);
    }
  }

  function showPrevNumberButton(numberValue) {
    setPrevNumber(prevNumber + numberValue);
    setShowNumbers(prevNumber + numberValue);
    if (isNaN(parseFloat(prevNumber)) && operation === "") {
      setResponse("");
    }
  }

  function showresult() {
    if (!isNaN(parseFloat(response))) {
      setResponse(eval(response + operation + prevNumber));
      setShowNumbers(eval(response + operation + prevNumber));
      setOperation("");
      setPrevNumber("");
    }
  }

  return (
    <div className="w-full max-h-screen text-2xl flex flex-col">
      <div className=" h-32 max-w-3xl bg-gray-500 text-8xl flex  justify-end text-end items-end ">
        {showNumbers}
      </div>
      <div className="w-full max-w-3xl   flex flex-wrap">
        <CalculatorButtons
          functions={{
            resetResponse: resetResponse,
            alterNegativeAndPositive: alterNegativeAndPositive,
            percent: percent,
            decimal: decimal,
            calculatingButton: calculatingButton,
            showPrevNumberButton: showPrevNumberButton,
            showresult: showresult,
          }}
        />
      </div>
    </div>
  );
}

export default Calculator;
