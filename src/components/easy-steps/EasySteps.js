import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import EasyStepsContent from "./EasyStepsContent";
import "./easy_steps.scss";

const EasySteps = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Only Three Easy Steps to Follow"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />

        <div className="easy_steps">
          <div className="easy_steps_img">
            <img src="images/easy_steps_img.svg" alt="mobile" />
          </div>
          <div className="easy_steps_content">
            <EasyStepsContent
              count={"1"}
              header={"Search the Doctor for Appointment"}
              des={
                "Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience."
              }
            />

            <EasyStepsContent
              count={"2"}
              header={"Get Doctor Consultation through Video Calling"}
              des={
                "Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation."
              }
            />

            <EasyStepsContent
              count={"3"}
              header={"Get Your Prescription"}
              des={
                "Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later."
              }
            />
          </div>

          <div className="easy_steps_svg">
            <img src="images/easy_steps.svg" alt="easy steps svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EasySteps;
