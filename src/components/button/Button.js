import React from "react";
import "./button.scss";

const Button = ({ marginLeft, text, fontSize }) => {
  return (
    <>
      <a
        href="/"
        className="button"
        style={{
          fontSize: `${fontSize}`,
          marginLeft: `${marginLeft}`,
        }}
      >
        {text}
      </a>
    </>
  );
};

export default Button;
