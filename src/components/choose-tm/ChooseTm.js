import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import ChooseTmContent from "./ChooseTmContent";
import "./choose_tm.scss";

const ChooseTm = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Why Choose TM?"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        <div className="choose_tm_content">
          <ChooseTmContent
            image={"images/tm_hand.svg"}
            header={"Easy to Use"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            }
          />
          <ChooseTmContent
            image={"images/tm_clock.svg"}
            header={"24 / 7 Service"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            }
          />
          <ChooseTmContent
            image={"images/tm_doctor.svg"}
            header={"Expert Doctors"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            }
          />
          <ChooseTmContent
            image={"images/tm_trusted.svg"}
            header={"Trusted"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ChooseTm;
