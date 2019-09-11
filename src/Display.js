import React from "react";
import "./Display.css";
const Display = ({ input, onChange }) => {
  return (
    <div>
      <input
        id="name"
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type="text"
        aria-describedby="name-desc"
        value={input}
        onChange={onChange}
      />
    </div>
  );
};

export default Display;
