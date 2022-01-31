import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import Button from "../button/Button";
import "./services.scss";
import ServicesList from "./ServicesList";

const Services = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Our Services"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        <div className="services">
          <div className="services_img">
            <img src="images/services_img.svg" alt="services" />
          </div>
          <div className="services_content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Button text={"Read More"} />
            <div className="services_list">
              <ServicesList
                title={"General Healthcare"}
                marginBottom={"-40px"}
                marginTop={"-15px"}
              />
              <ServicesList
                title={"Maternal Healthcare"}
                marginBottom={"-40px"}
                marginTop={"-15px"}
              />
              <ServicesList
                title={"Child Healthcare"}
                marginBottom={"-40px"}
                marginTop={"-15px"}
              />
              <ServicesList
                title={"Elder Healthcare"}
                marginBottom={"-40px"}
                marginTop={"-15px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
