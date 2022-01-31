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
  circle_big_top,
  circle_big_left,
  circle_big_right,
  circle_small_top,
  circle_small_left,
  circle_small_right,
  left_bg,
  right_bg,
  right_img,
  right_bg_top,
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
          <div
            className="about_us_right_svg"
            style={{ display: right_bg, top: right_bg_top }}
          >
            <img src={right_img} alt="about svg" />
          </div>
          <div
            className="about_us_circle_big"
            style={{
              display: circle,
              top: circle_big_top,
              left: circle_big_left,
              right: circle_big_right,
            }}
          ></div>
          <div
            className="about_us_circle_small"
            style={{
              display: circle,
              top: circle_small_top,
              left: circle_small_left,
              right: circle_small_right,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
