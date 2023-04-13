import React from "react";
import { arrButton } from "../arrButton";
import Button from "./Button";

function CalculatorButtons({
  onResetResponse,
  onAlterNegativeAndPositive,
  onPercent,
  onDecimal,
  onCalculatingButton,
  onShowPrevNumberButton,
  onShowresult,
}) {
  return (
    <>
      {arrButton.map((button, i) => {
        return (
          <div key={i}>
            {button.typebutton === "resetResponse" && (
              <Button
                functionButton={onResetResponse}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "alterNegativeAndPositive" && (
              <Button
                functionButton={onAlterNegativeAndPositive}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "percent" && (
              <Button
                functionButton={onPercent}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "decimal" && (
              <Button
                functionButton={onDecimal}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "calculatingButton" && (
              <Button
                functionButton={onCalculatingButton}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "showresult" && (
              <Button
                functionButton={onShowresult}
                valueButton={button.valueButton}
              />
            )}
            {button.typebutton === "numberButton" && (
              <Button
                functionButton={onShowPrevNumberButton}
                valueButton={button.valueButton}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

export default CalculatorButtons;
