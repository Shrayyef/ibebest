/** @format */

import React from "react";

const Price = ({ horizontal, price, new_price }) => {
  return (
    <div
      className={`price d-flex align-center ${
        horizontal ? "flex-row" : "flex-column"
      }`}
    >
      <p className="secondary current-price">$ {price}</p>
      {!!new_price && <p className="grey old-price">$ 1200.00</p>}
    </div>
  );
};

export default Price;
