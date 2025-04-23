import React from "react";
import { Container } from "react-bootstrap";
import { DumbleIcon, MiniCelenderIcon, MiniDollerIcon, TimeIcon } from "../../../../public/assets/icons";
import PriceCard from "@/components/common/priceCard/priceCard";

const Price = () => {
  return (
    <div className="price_page">
      <Container>
        <div className="price_page_in">
          <div className="head_price">
            <p>
              {" "}
              <DumbleIcon /> pricing plan
            </p>
            <h1 className="main_heading">
              Transform Your Body with Our
              <span>Dynamic Fitness</span> Classes
            </h1>
          </div>
          <div className="card_box">
            <PriceCard className="active" />
            <PriceCard />
      
          </div>
          <ul className="options">
            <li><MiniCelenderIcon/>Get 30 day free trial</li>
            <li><MiniDollerIcon/>No any hidden fees pay</li>
            <li><TimeIcon/>You can cancel anytime</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Price;
