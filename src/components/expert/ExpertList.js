import React from "react";
import ServicesList from "../services/ServicesList";

const ExpertList = ({
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  marginBottom,
}) => {
  return (
    <>
      <div className="services_list">
        <ServicesList title={title1} marginBottom={marginBottom} />
        <ServicesList title={title2} marginBottom={marginBottom} />
        <ServicesList title={title3} marginBottom={marginBottom} />
        <ServicesList title={title4} marginBottom={marginBottom} />
        <ServicesList title={title5} marginBottom={marginBottom} />
        <ServicesList title={title6} marginBottom={marginBottom} />
      </div>
    </>
  );
};

export default ExpertList;
