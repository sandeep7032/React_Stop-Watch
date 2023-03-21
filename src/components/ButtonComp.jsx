import React from "react";

const ButtonComp = ({ Start, name }) => {
  return (
    <div className="btnDiv">
      <button
        className="button"
        onClick={() => {
          Start();
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default ButtonComp;
