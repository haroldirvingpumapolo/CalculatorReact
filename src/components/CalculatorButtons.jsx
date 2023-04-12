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
    numberButton,
    showresult,
  } = functions;

  return (
    <>
      {arrButton.map((button) => {
        switch (button.typebutton) {
          case "resetResponse":
            return (
              <Button
                functionButton={resetResponse}
                valueButton={button.valueButton}
              />
            );
          case "alterNegativeAndPositive":
            return (
              <Button
                functionButton={alterNegativeAndPositive}
                valueButton={button.valueButton}
              />
            );
          case "percent":
            return (
              <Button
                functionButton={percent}
                valueButton={button.valueButton}
              />
            );
          case "decimal":
            return (
              <Button
                functionButton={decimal}
                valueButton={button.valueButton}
              />
            );
          case "calculatingButton":
            return (
              <Button
                functionButton={calculatingButton}
                valueButton={button.valueButton}
              />
            );
          case "showresult":
            return (
              <Button
                functionButton={showresult}
                valueButton={button.valueButton}
              />
            );
          default:
            return (
              <Button
                functionButton={numberButton}
                valueButton={button.valueButton}
              />
            );
        }
      })}
    </>
  );
}

export default CalculatorButtons;
