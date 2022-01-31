import React from "react";
import "./footer.scss";
import FooterList from "./FooterList";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { BsTelephoneFill, BsGlobe } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_divider"></div>

        <div className="footer_logo">
          <img src="images/footer_logo.svg" alt="footer logo" />
        </div>

        <div className="footer_list">
          <p>
            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
            smod tempor incididunt ut labore et.
          </p>
          <FooterList
            title1={"Doctor"}
            title2={"Services"}
            title3={"Pharmacy Owner"}
            marginBottom={"-20px"}
          />

          <FooterList
            title1={"About Us"}
            title2={"Blog"}
            title3={"Contact Us"}
            marginBottom={"-20px"}
          />

          <FooterList
            title1={"Terms & Conditions"}
            title2={"Privacy Policy"}
            title3={"FAQ"}
            marginBottom={"-20px"}
          />
        </div>

        <div className="footer_contact">
          <div className="footer_location">
            <h4>Contact Us</h4>
            <div className="footer_location1">
              <MdLocationPin className="footer_icon" />
              <p>House-20, Road-27, Block-A, Banani, Dhaka.</p>
            </div>

            <div className="footer_location2">
              <BsTelephoneFill className="footer_icon" />
              <p>+8801234567890, +88058269458</p>
            </div>

            <div className="footer_location3">
              <MdEmail className="footer_icon" />
              <p>tmbd@mail.com</p>
            </div>

            <div className="footer_location4">
              <BsGlobe className="footer_icon" />
              <p>tmbd.com</p>
            </div>
          </div>

          <div className="footer_social">
            <h4>Social Links</h4>
            <div className="footer_social_icons">
              <FaFacebookF className="footer_social_fb" />
              <FaYoutube className="footer_social_fb" />
              <FaTwitter className="footer_social_fb" />
              <AiFillInstagram className="footer_social_fb" />
              <FaLinkedin className="footer_social_fb" />
            </div>
          </div>

          <div className="footer_download">
            <h4>Download Our App</h4>
            <img src="images/footer_play.svg" alt="play" />
            <img src="images/footer_app.svg" alt="app" />
          </div>
        </div>

        <div className="footer_copy">
          <p>
            Copyright TM 2021. All rights reserved. Created by Golden Infotech.
          </p>
        </div>

        <div className="footer_bg">
          <img src="images/footer.svg" alt="footer bg" />
        </div>
      </div>
    </>
  );
};

export default Footer;
