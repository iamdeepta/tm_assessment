import React from "react";

const AboutUsImg = ({ img, borderRadius }) => {
  return (
    <>
      <div className="about_us_left_content">
        <img src={img} alt="about us" style={{ borderRadius: borderRadius }} />
      </div>
    </>
  );
};

export default AboutUsImg;
