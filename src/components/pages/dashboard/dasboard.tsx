"use client";

import ProfileCard from "@/components/common/profilecard/profileCard";
import { Col, Row } from "react-bootstrap";
import demo from "../../../../public/assets/user.png"
import DailyTask from "@/components/common/dailytask/dailytask";


const Dashboard = () => {

  return (
    <>
      <section className="dashboard">
  <div className="dashboard_head">
    <Row>
    <Col lg={9}>
      <DailyTask routine="legs" title="Today task" workoutExercise="Flat Bench Press (Barbell)" workoutReps="10-12" workoutSets="4" workoutName="ChestPresses"  />
      </Col> 
      <Col lg={3}>
      <ProfileCard profile={demo} name="jashan" weight="50 kg" location="mohali" age="20" />
      </Col>
     
     
      

     



    </Row>
  </div>
      </section>
    </>
  );
};

export default Dashboard;
