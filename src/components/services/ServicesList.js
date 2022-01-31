import React from "react";
import { MdDoubleArrow } from "react-icons/md";

const ServicesList = ({ title, marginBottom, marginTop }) => {
  return (
    <>
      <div
        className="services_list_content"
        style={{ marginBottom: marginBottom }}
      >
        <MdDoubleArrow
          className="services_list_icon"
          style={{ marginTop: marginTop }}
        />
        <p>{title}</p>
      </div>
    </>
  );
};

export default ServicesList;
