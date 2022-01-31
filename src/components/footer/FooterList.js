import React from "react";
import ServicesList from "../services/ServicesList";

const FooterList = ({ title1, title2, title3, marginBottom }) => {
  return (
    <>
      <div className="services_list">
        <ServicesList title={title1} marginBottom={marginBottom} />
        <ServicesList title={title2} marginBottom={marginBottom} />
        <ServicesList title={title3} marginBottom={marginBottom} />
      </div>
    </>
  );
};

export default FooterList;
