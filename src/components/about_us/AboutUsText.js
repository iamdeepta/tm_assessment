import React from "react";
import Button from "../button/Button";

const AboutUsText = ({ des }) => {
  return (
    <>
      <div className="about_us_right_content">
        <p>{des}</p>
        <Button text={"Read More"} fontSize={"18px"} />
      </div>
    </>
  );
};

export default AboutUsText;
