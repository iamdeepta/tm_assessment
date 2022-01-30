import React from "react";

const AboutUsHeader = ({ header, header_bottom }) => {
  return (
    <>
      <div className="about_us_header">
        <h4>{header}</h4>
        <p>{header_bottom}</p>
      </div>
    </>
  );
};

export default AboutUsHeader;
