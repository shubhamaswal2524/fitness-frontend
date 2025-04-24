import React from "react";
import { ArrowIcon } from "../../../../public/assets/icons";

const PriceCard = (
  className: string | any
  // price: number,
  // title: string,
  // description: string
) => {
  return (
    <div className={`price_card ${className || ""}`}>
      <div className="batch_badge">MOST POPULAR</div>
      <p>12 WEEK PASS</p>
      <h2>
        <span className="doller_sign">$</span>
      15,000<span>/12 week</span>
      </h2>
      <ul>
        <li><ArrowIcon/>Update workout (Calories In/Out)</li>
        <li><ArrowIcon/>Best Diet Plan & Info</li>
        <li><ArrowIcon/>Zoom meeting per week</li>
        <li><ArrowIcon/>Best User Satisfaction</li>
        <li><ArrowIcon/>Free Video Program</li>
      </ul>
    </div>
  );
};

export default PriceCard;
