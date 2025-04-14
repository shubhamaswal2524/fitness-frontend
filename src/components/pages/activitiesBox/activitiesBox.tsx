"use client";

import { Col, Row } from "react-bootstrap";
import { FireIcon, MuscleIcon, SleepIcon } from "../../../../public/assets/icons";
import GrowthCard from "@/components/common/growthCard/growthCard";


const ActivitiesBox = () => {
  return (
    <>
      <section className="activities_box">
        <Row>
            <Col lg={4} md={6} sm={6}>
            <div className="activities_box_in">
              <GrowthCard icon={<FireIcon/>} heading={"calories burn"} amount={"67cal"}/>
            </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="activities_box_in">
            <GrowthCard icon={<MuscleIcon/>} heading={"Weekly progress"} amount={"50%"}/>
            </div>
            </Col>
            <Col lg={4} md={6} sm={6}>
            <div className="activities_box_in">
            <GrowthCard icon={<SleepIcon/>} heading={"Sleeping Potency"} amount={"8 Hours"}/>
            </div>
            </Col>
        </Row>
      </section>
    </>
  );
};

export default ActivitiesBox;
