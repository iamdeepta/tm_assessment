import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import Button from "../button/Button";
import "./faq.scss";
import FAQContent from "./FAQContent";

const FAQ = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Frequently Asked Questions "}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />

        <div className="faq">
          <div className="faq_img">
            <img src="images/faq_img.svg" alt="faq pic" />
          </div>
          <div className="faq_content">
            <FAQContent
              header={"What is TM?"}
              icon={"-"}
              des={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              }
              marginTop={"0px"}
            />

            <FAQContent
              header={"What do you treat?"}
              icon={"+"}
              des={""}
              marginTop={"30px"}
            />

            <FAQContent
              header={"How does it work?"}
              icon={"+"}
              des={""}
              marginTop={"30px"}
            />

            <FAQContent
              header={"Who provides consultation on TM?"}
              icon={"+"}
              des={""}
              marginTop={"30px"}
            />

            <FAQContent
              header={"Are the registered Doctors verified?"}
              icon={"+"}
              des={""}
              marginTop={"30px"}
            />

            {/* <div className="faq_content_header">
              <h4>What is TM?</h4>
              <p>+</p>
            </div>
            <div className="faq_content_body">
              <p></p>
            </div>
            <div className="faq_divider" style={{ marginTop: "30px" }}></div> */}
            <div className="faq_btn">
              <Button text={"View All FAQ's"} />
            </div>
          </div>

          <div className="faq_bg">
            <img src="images/faq.svg" alt="faq bg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
