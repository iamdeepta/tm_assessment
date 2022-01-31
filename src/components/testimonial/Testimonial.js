import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import "./testimonial.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"What Are The Patients Saying About us"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />

        <div className="testimonial">
          <div className="testimonial_img">
            <img src="images/testimonial_img1.svg" alt="image1" />
          </div>
          <div className="testimonial_card">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. when an
              unknown printer took a galley of type and scrambled.
            </p>
            <div className="testimonial_bottom_text">
              <h4>Foisal Morshed</h4>
              <p>Student, CSE, University of Royal</p>
            </div>
          </div>

          <div className="test_upper_quote">
            <img src="images/upper_quote.svg" alt="upper quote" />
          </div>
          <div className="test_lower_quote">
            <img src="images/lower_quote.svg" alt="lower quote" />
          </div>

          <div className="test_img2">
            <img src="images/testimonial_img2.svg" alt="image2" />
          </div>
          <div className="test_img3">
            <img src="images/testimonial_img3.svg" alt="image3" />
          </div>
          <div className="test_img4">
            <img src="images/testimonial_img4.svg" alt="image4" />
          </div>

          <div className="test_left_arrow">
            <MdKeyboardArrowLeft className="left_arrow_icon" />
          </div>
          <div className="test_right_arrow">
            <MdKeyboardArrowRight className="right_arrow_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
