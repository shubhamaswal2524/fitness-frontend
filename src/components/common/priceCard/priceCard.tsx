import React from "react";
import { ArrowIcon } from "../../../../public/assets/icons";
import CommonArrowButton from "../commonArrowBtn/commonArrowBtn";
import Button from "../button/button";

const PriceCard = (
  className: string | any
  // price: number,
  // title: string,
  // description: string
) => {
  return (
    <>
    <div className={`price_card ${className || ""}`}>
      <div className="batch_badge">SHREDCODE BOOST</div>
      <p>6 Week Plan </p>
      <h2>
        <span className="doller_sign">&#8377;</span>
      8,000<span className="line_thro">9,500</span>
      </h2>
      <h4>Customised Workout - built around your equipment, schedule & goals @ 6-Week Diet Strategy - drop fat without energy crashes</h4>
      <ul>
        <li><ArrowIcon/>Bi-weekly Check-ins</li>
        <li><ArrowIcon/>1 Phone Call (Goal Setting)</li>
        <li><ArrowIcon/>Grocery List</li>
        <li><ArrowIcon/>Supplement Stack</li>
        <li><ArrowIcon/>15% OFF on Upgrade Later</li>
      </ul>
      <CommonArrowButton>Purchase Now</CommonArrowButton>
    </div>
    <div className={`price_card ${className || ""}`}>
      <div className="batch_badge">SHREDCODE ACCELERATE</div>
      <p>8 + 2 Week Plan </p>
      <h2>
        <span className="doller_sign">&#8377;</span>
      13,500<span className="line_thro">14,500</span>
      </h2>
      <h4>Semi-Personalised Workout + ® Diet Plan - faster body-re comp with minimum guesswork</h4>
      <ul>
        <li><ArrowIcon/>Weekly Check-ins + 2 Phone Calls</li>
        <li><ArrowIcon/>Habit Coaching + Lifestyle Tweaks</li>
        <li><ArrowIcon/>Grocery List</li>
        <li><ArrowIcon/>Supplement & Grocery Stack</li>
        <li><ArrowIcon/>Priority WhatsApp replies {"<"} 3 h (Mon-Sat)</li>
        <li><ArrowIcon/>2 Week Post-Plan Maintenance Guide</li>
        
      </ul>
      <CommonArrowButton>Purchase Now</CommonArrowButton>
    </div>
    <div className={`price_card ${className || ""}`}>
      <div className="batch_badge">SHREDCODE ELITE PRIME</div>
      <p>12 + 4 Week Plan </p>
      <h2>
        <span className="doller_sign">&#8377;</span>
      18,000<span className="line_thro">20,000</span>
      </h2>
      <h4>Fully Personalised Workout + ® Meal Plans - engineered for your body, lifestyle & taste buds</h4>
      <ul>
        <li><ArrowIcon/>3 Phone call Sessions</li>
        <li><ArrowIcon/>Habit Building Guidance</li>
        <li><ArrowIcon/>24x7 WhatsApp Support</li>
        <li><ArrowIcon/>Grocery List</li>
        <li><ArrowIcon/>1-Month Post-Plan Maintenance</li>
      </ul>
      <h4>BONUS: Mindset Upgrade Pack - Downloadable ShredCode Affirmation Audios (Available Week 1-12).</h4>
      <CommonArrowButton>Purchase Now</CommonArrowButton>
    </div>
    </>
  );
};

export default PriceCard;
