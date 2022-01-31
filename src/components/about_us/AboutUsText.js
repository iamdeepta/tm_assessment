import React from "react";
import Button from "../button/Button";

const AboutUsText = ({ des, text, header_text, header_text_display }) => {
  return (
    <>
      <div className="about_us_right_content">
        <h4 style={{ display: header_text_display }}>{header_text}</h4>
        <p>{des}</p>
        <Button text={text} fontSize={"18px"} />
      </div>
    </>
  );
};

export default AboutUsText;
