import React from "react";

const Button = ({ buttonName, action }) => {
  return (
    <button
      type="button"
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-200"
      onClick={action}
    >
      {buttonName}
    </button>
  );
};

export default Button;
