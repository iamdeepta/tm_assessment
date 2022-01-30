import React from "react";

const EasyStepsContent = ({ count, header, des }) => {
  return (
    <>
      <div className="easy_steps_content1">
        <div className="easy_steps_count">{count}</div>
        <div className="easy_steps_inner_content">
          <h4>{header}</h4>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
};

export default EasyStepsContent;
