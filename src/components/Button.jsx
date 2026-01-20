import React from "react";

const Button = ({ className, btnTxt }) => {
  return (
    <div
      className={`text-base text-white font-semibold font-poppins border border-common py-1 px-3 rounded-4xl ${className}`}
    >
      {btnTxt}
    </div>
  );
};

export default Button;
