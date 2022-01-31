import React from "react";

const OrderMedicineCard = ({ header, location }) => {
  return (
    <>
      <div className="order_medicine_card">
        <h4>{header}</h4>
        <div className="order_medicine_location">
          <img src="images/order_medicine_location.svg" alt="location" />
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

export default OrderMedicineCard;
