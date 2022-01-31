import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
//import ServicesList from "../services/ServicesList";
import "./expert.scss";
import ExpertList from "./ExpertList";

const Expert = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Expert & Verified Doctors"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        <div className="expert">
          <ExpertList
            title1={"General Physician"}
            title2={"Pediatrics / Child Care"}
            title3={"Gynaecology"}
            title4={"Neurology / Brain"}
            title5={"Pulmonology / Lungs"}
            title6={"Herbal medicine"}
            marginBottom={"-20px"}
          />

          <ExpertList
            title1={"Gastroenterology"}
            title2={"Cardiology / Heart"}
            title3={"Ophthalmology / Eye"}
            title4={"Dentistry / Dental Care"}
            title5={"Endocrinology / Diabetes"}
            title6={"Occupational therapy"}
            marginBottom={"-20px"}
          />

          <ExpertList
            title1={"Nephrology / Kidney"}
            title2={"Obstetrics"}
            title3={"ENT / Ear, Nose and Throat"}
            title4={"Parasitology"}
            title5={"Podiatry"}
            title6={" Oncology"}
            marginBottom={"-20px"}
          />

          <ExpertList
            title1={"Psychiatry"}
            title2={"Rheumatology"}
            title3={"Urology"}
            title4={"Chiropractic"}
            title5={"Dermatology"}
            title6={" Vascular Surgery"}
            marginBottom={"-20px"}
          />
        </div>
      </div>
    </>
  );
};

export default Expert;
