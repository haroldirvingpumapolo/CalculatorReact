import React, { useState } from "react";
import CalculatorButtons from "./CalculatorButtons";

function Calculator() {
  const [showResponse, setShowResponse] = useState("");
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [response, setResponse] = useState("");

  function resetResponse() {
    setShowResponse("");
    setNumber("");
    setOperation("");
    setResponse("");
  }

  function alterNegativeAndPositive() {
    const copyNumber = response;
    if (isNaN(parseInt(copyNumber))) {
      const copyNumber = number;
      const resultCopy =
        copyNumber.charAt(0) === "-"
          ? copyNumber.replace("-", "+")
          : copyNumber.charAt(0) === "+"
          ? copyNumber.replace("+", "-")
          : `-${copyNumber}`;
      setNumber(resultCopy);
      setShowResponse(resultCopy);
    }
  }
  function percent() {
    const resultCopy = eval(number + "/100");
    setNumber(resultCopy.toString());
    setShowResponse(resultCopy.toString());
  }

  function decimal() {
    const copyNumber = number;
    if (!copyNumber.includes(".")) {
      setNumber(`${copyNumber}.`);
      setShowResponse(`${copyNumber}.`);
    }
  }
  function calculatingButton(calculatingValue) {
    setShowResponse(eval(response + operation + number));
    setResponse(eval(response + operation + number));
    setOperation(calculatingValue);
    setNumber("");
  }

  function numberButton(numberValue) {
    setNumber(number + numberValue);
    setShowResponse(number + numberValue);
  }
  function showresult() {
    setResponse(eval(response + operation + number));
    setShowResponse(eval(response + operation + number));
    setOperation("");
    setNumber("");
  }

  return (
    <div className="w-full max-h-screen text-2xl flex flex-col">
      <div className=" h-32 max-w-3xl bg-gray-500 text-8xl flex  justify-end text-end items-end ">
        {showResponse}
      </div>
      <div className="w-full max-w-3xl   flex flex-wrap">
        <CalculatorButtons
          functions={{
            resetResponse: resetResponse,
            alterNegativeAndPositive: alterNegativeAndPositive,
            percent: percent,
            decimal: decimal,
            calculatingButton: calculatingButton,
            numberButton: numberButton,
            showresult: showresult,
          }}
        />
      </div>
    </div>
  );
}

export default Calculator;
