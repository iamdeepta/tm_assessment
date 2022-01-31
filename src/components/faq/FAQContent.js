import React from "react";

const FAQContent = ({ header, icon, des, marginTop }) => {
  return (
    <>
      <div className="faq_content_header">
        <h4>{header}</h4>
        <p>{icon}</p>
      </div>
      <div className="faq_content_body">
        <p>{des}</p>
      </div>
      <div className="faq_divider" style={{ marginTop: marginTop }}></div>
    </>
  );
};

export default FAQContent;
