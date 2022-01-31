import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import "./blogs.scss";
import BlogsCard from "./BlogsCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Blogs = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"News & Blogs"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />

        <div className="blogs">
          <BlogsCard
            date={"November 5,2021"}
            title={"Child care for Winter Season"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            doctor={"Dr. Saifur Rahman"}
            img={"images/blogs1.svg"}
          />

          <BlogsCard
            date={"November 5,2021"}
            title={"Telemedicine Service"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            doctor={"Dr. Saifur Rahman"}
            img={"images/blogs2.svg"}
          />

          <BlogsCard
            date={"November 5,2021"}
            title={"Pregnancy Complications"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            doctor={"Dr. Saifur Rahman"}
            img={"images/blogs3.svg"}
          />

          <BlogsCard
            date={"November 5,2021"}
            title={"Backpain Treatment"}
            des={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"
            }
            doctor={"Dr. Saifur Rahman"}
            img={"images/blogs4.svg"}
          />
        </div>

        <div className="blogs_arrow">
          <div className="blogs_left_arrow">
            <MdKeyboardArrowLeft className="left_arrow_icon" />
          </div>
          <div className="blogs_right_arrow">
            <MdKeyboardArrowRight className="right_arrow_icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
