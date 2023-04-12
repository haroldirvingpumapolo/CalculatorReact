import React from "react";
import { arrButton } from "../arrButton";
import Button from "./Button";

function CalculatorButtons({ functions }) {
  const {
    resetResponse,
    alterNegativeAndPositive,
    percent,
    decimal,
    calculatingButton,
    showPrevNumberButton,
    showresult,
  } = functions;

  return (
    <>
      {arrButton.map((button, i) => {
        switch (button.typebutton) {
          case "resetResponse":
            return (
              <div key={i}>
                <Button
                  functionButton={resetResponse}
                  valueButton={button.valueButton}
                />
              </div>
            );
          case "alterNegativeAndPositive":
            return (
              <div key={i}>
                <Button
                  functionButton={alterNegativeAndPositive}
                  valueButton={button.valueButton}
                />
              </div>
            );
          case "percent":
            return (
              <div key={i}>
                <Button
                  functionButton={percent}
                  valueButton={button.valueButton}
                />
              </div>
            );
          case "decimal":
            return (
              <div key={i}>
                <Button
                  functionButton={decimal}
                  valueButton={button.valueButton}
                />
              </div>
            );
          case "calculatingButton":
            return (
              <div key={i}>
                <Button
                  functionButton={calculatingButton}
                  valueButton={button.valueButton}
                />
              </div>
            );
          case "showresult":
            return (
              <div key={i}>
                <Button
                  functionButton={showresult}
                  valueButton={button.valueButton}
                />
              </div>
            );
          default:
            return (
              <div key={i}>
                <Button
                  functionButton={showPrevNumberButton}
                  valueButton={button.valueButton}
                />
              </div>
            );
        }
      })}
    </>
  );
}

export default CalculatorButtons;
