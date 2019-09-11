import React from "react";
import "./NumPad.css";
const NumPad = ({
  onNumberPressed,
  onOperatorPressed,
  onEqualPressed,
  memory,
  back
}) => {
  return (
    <div className="pad">
      <div className="num">
        <span className="nums grow" onClick={() => onNumberPressed("1")}>
          1
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("2")}>
          2
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("3")}>
          3
        </span>
        <span className="nums grow" onClick={() => onOperatorPressed("x")}>
          *
        </span>
      </div>
      <div className="num">
        <span className="nums grow" onClick={() => onNumberPressed("4")}>
          4
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("5")}>
          5
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("6")}>
          6
        </span>
        <span className="nums grow" onClick={() => onOperatorPressed("/")}>
          /
        </span>
      </div>
      <div className="num">
        <span className="nums grow" onClick={() => onNumberPressed("7")}>
          7
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("8")}>
          8
        </span>
        <span className="nums grow" onClick={() => onNumberPressed("9")}>
          9
        </span>
        <span className="nums grow" onClick={() => back()}>
          &lt;--
        </span>
      </div>
      <div className="num">
        <span className="nums grow" onClick={() => onNumberPressed("0")}>
          0
        </span>
        <span className="nums grow" onClick={() => onOperatorPressed("+")}>
          +
        </span>
        <span className="nums grow" onClick={() => onOperatorPressed("-")}>
          -
        </span>

        <span className="nums grow" onClick={() => onEqualPressed()}>
          =
        </span>
      </div>
    </div>
  );
};

export default NumPad;
