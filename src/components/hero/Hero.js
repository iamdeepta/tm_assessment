import React from "react";
import Button from "../button/Button";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero_left_svg">
          <img src="images/hero_left.svg" alt="hero_svg1" />
        </div>
        <div className="hero_right_svg">
          <img src="images/hero_right.svg" alt="hero_svg2" />
        </div>
        <div className="hero_content">
          <div className="hero_left_content">
            <h4>Protect and Take Care of Your Health</h4>
            <p>
              Download Our App and feel free to take your Health Advice from a
              Specialist.
            </p>
            <Button text={"Search for a Service"} fontSize={"18px"} />
            <div className="hero_play">
              <img src="images/hero_play_store.svg" alt="play store" />
              <img src="images/hero_app_store.svg" alt="app store" />
            </div>
          </div>
          <div className="hero_right_content">
            <img src="images/hero_img.svg" alt="hero_image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
