import React from "react";

const Button = ({ buttonName, action }) => {
  return (
    <button type="button" className="simple-button" onClick={action}>
      {buttonName}
    </button>
  );
};

export default Button;
