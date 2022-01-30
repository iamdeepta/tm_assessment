import React from "react";

const ChooseTmContent = ({ image, header, des }) => {
  return (
    <>
      <div className="choose_tm_content1">
        <img src={image} alt="hand" />
        <h4>{header}</h4>
        <p>{des}</p>
      </div>
    </>
  );
};

export default ChooseTmContent;
