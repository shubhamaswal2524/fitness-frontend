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
              Three coaching tiers. One result: 
              <span>your best shape </span> ever
            </h1>
          </div>
          <div className="card_box">
            <PriceCard className="active" />
      
          </div>
          <ul className="options">
            <li><MiniCelenderIcon/>Prices inclusive of GST</li>
            <li><MiniDollerIcon/>No any hidden fees pay</li>
            <li><TimeIcon/>Terms & Conditions apply</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Price;
