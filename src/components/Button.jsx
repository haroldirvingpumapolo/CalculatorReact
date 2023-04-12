import React from "react";

function Button({ functionButton, valueButton }) {
  return (
    <button
      className="w-48 h-36 border-2 border-gray-500 bg-orange-400"
      onClick={() => {
        functionButton(
          valueButton === "X" ? "*" : valueButton === "÷" ? "/" : valueButton
        );
      }}
    >
      {valueButton}
    </button>
  );
}

export default Button;
