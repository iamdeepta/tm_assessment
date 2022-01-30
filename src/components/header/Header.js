import React from "react";
import "./header.scss";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";
import Button from "../button/Button";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_logo">
          <img src="images/tm_logo.svg" alt="logo" />
        </div>
        <div className="header_links">
          <ul>
            <li>
              Doctor{" "}
              <div>
                <MdOutlineKeyboardArrowDown className="header_arrow_down" />
              </div>
            </li>
            <li>
              Services{" "}
              <div>
                <MdOutlineKeyboardArrowDown className="header_arrow_down" />
              </div>
            </li>
            <li>
              Pharmacy Owner{" "}
              <div>
                <MdOutlineKeyboardArrowDown className="header_arrow_down" />
              </div>
            </li>
            <li>About Us </li>
            <li>Blog </li>
            <li>Contact </li>
            <li>FAQ </li>
            <li>
              <div>
                <HiOutlineGlobe className="header_arrow_down header_globe" />
              </div>
              En{" "}
              <div>
                <MdOutlineKeyboardArrowDown className="header_arrow_down" />
              </div>
            </li>
            <li>
              <Button marginLeft={"5px"} text={"Login"} fontSize={"14px"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
