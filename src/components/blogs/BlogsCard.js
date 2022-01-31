import React from "react";
import Button from "../button/Button";

const BlogsCard = ({ date, title, des, doctor, img }) => {
  return (
    <>
      <div className="blogs_card">
        <div className="blogs_img">
          <img src={img} alt="blogs1" />
        </div>
        <div className="blogs_content">
          <p>{date}</p>
          <h4>{title}</h4>
          <p>{des}</p>
          <div className="blogs_footer">
            <p>{doctor}</p>
            <Button text={"Read More"} fontSize={"12px"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsCard;
