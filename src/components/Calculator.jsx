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
    (response || prevNumber) &&
      (prevNumber && !response
        ? (setPrevNumber((parseFloat(prevNumber) * -1).toString()),
          setShowNumbers((parseFloat(prevNumber) * -1).toString()))
        : (setResponse((parseFloat(response) * -1).toString()),
          setShowNumbers((parseFloat(response) * -1).toString())));
  }

  function percent() {
    prevNumber &&
      (setPrevNumber(eval(prevNumber + "/100")),
      setShowNumbers(eval(prevNumber + "/100")));
  }

  function decimal() {
    !prevNumber.includes(".") &&
      (prevNumber
        ? (setPrevNumber(`${prevNumber}.`), setShowNumbers(`${prevNumber}.`))
        : (setPrevNumber(`0${prevNumber}.`),
          setShowNumbers(`0${prevNumber}.`)));

    !prevNumber && !operation && setResponse("");
  }
  function calculatingButton(calculatingValue) {
    prevNumber &&
      (setShowNumbers(eval(response + operation + prevNumber)),
      setResponse(eval(response + operation + prevNumber)),
      setOperation(calculatingValue),
      setPrevNumber(""));
    response && setOperation(calculatingValue);
  }

  function showPrevNumberButton(numberValue) {
    setPrevNumber(prevNumber + numberValue);
    setShowNumbers(prevNumber + numberValue);
    !prevNumber && !operation && setResponse("");
  }

  function showresult() {
    response &&
      (setResponse(eval(response + operation + prevNumber)),
      setShowNumbers(eval(response + operation + prevNumber)),
      setOperation(""),
      setPrevNumber(""));
  }

  return (
    <div className="w-full max-h-screen text-2xl flex flex-col">
      <div className=" h-32 max-w-3xl bg-gray-500 text-8xl flex  justify-end text-end items-end ">
        {showNumbers}
      </div>
      <div className="w-full max-w-3xl max-h-96  flex flex-wrap">
        <CalculatorButtons
          onResetResponse={resetResponse}
          onAlterNegativeAndPositive={alterNegativeAndPositive}
          onPercent={percent}
          onDecimal={decimal}
          onCalculatingButton={calculatingButton}
          onShowPrevNumberButton={showPrevNumberButton}
          onShowresult={showresult}
        />
      </div>
    </div>
  );
}

export default Calculator;
