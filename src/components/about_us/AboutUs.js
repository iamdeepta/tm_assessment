import React from "react";
import AboutUsHeader from "./AboutUsHeader";
//import Button from "../button/Button";
// import AboutUsImg from "./AboutUsImg";
// import AboutUsText from "./AboutUsText";
import "./about_us.scss";

const AboutUs = ({
  header,
  header_bottom,
  first,
  second,
  circle,
  left_bg,
  right_bg,
  padding,
}) => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader header={header} header_bottom={header_bottom} />
        <div className="about_us_content" style={{ padding: padding }}>
          {first}
          {second}

          <div className="about_us_left_svg" style={{ display: left_bg }}>
            <img src="images/about_us.svg" alt="about svg" />
          </div>
          <div className="about_us_right_svg" style={{ display: right_bg }}>
            <img src="images/video_consultation.svg" alt="about svg" />
          </div>
          <div
            className="about_us_circle_big"
            style={{ display: circle }}
          ></div>
          <div
            className="about_us_circle_small"
            style={{ display: circle }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
