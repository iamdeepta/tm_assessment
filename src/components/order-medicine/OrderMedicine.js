import React from "react";
import AboutUsHeader from "../about_us/AboutUsHeader";
import Button from "../button/Button";
import "./order_medicine.scss";

const OrderMedicine = () => {
  return (
    <>
      <div className="about_us">
        <AboutUsHeader
          header={"Order Medicine Online from Popular Pharmacy Nearby"}
          header_bottom={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        />
        <div className="order_medicine">
          <div className="order_medicine_card">
            <h4>Shahbag Medicine Corner</h4>
            <div className="order_medicine_location">
              <img src="images/order_medicine_location.svg" alt="location" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>

          <div className="order_medicine_card">
            <h4>Shahbag Medicine Corner</h4>
            <div className="order_medicine_location">
              <img src="images/order_medicine_location.svg" alt="location" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>

          <div className="order_medicine_card">
            <h4>Shahbag Medicine Corner</h4>
            <div className="order_medicine_location">
              <img src="images/order_medicine_location.svg" alt="location" />
              <p>
                Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag,
                Dhaka- 1000, Bangladesh
              </p>
            </div>
          </div>
        </div>
        <div className="order_medicine_btn">
          <Button text={"View All"} fontSize={"18px"} />
        </div>
      </div>
    </>
  );
};

export default OrderMedicine;
