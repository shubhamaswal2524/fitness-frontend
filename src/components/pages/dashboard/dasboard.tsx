"use client";

import ProfileCard from "@/components/common/profilecard/profileCard";
import { Col, Row } from "react-bootstrap";
import demo from "../../../../public/assets/user.png";
import DailyTask from "@/components/common/dailytask/dailytask";
import DeitPlan from "@/components/common/deitPlan/deitPlan";
import PerformanceCard from "@/components/common/performanceCard/performanceCard";
import ActivitiesBox from "../activitiesBox/activitiesBox";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { profile } = useSelector((state: any) => state.user);

  const workouts = [
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
    {
      workoutName: "Chest Day",
      workoutExercise: "Bench Press",
      workoutReps: 10,
      workoutSets: 3,
    },
  ];

  return (
    <>
      <section className="dashboard">
        <div className="dashboard_head">
          <Row>
            <Col xl={3} md={6} sm={6} className="upper_box">
              <DeitPlan food="Rice" foodvalue="200gm" title="Lunch" />
            </Col>
            <Col xl={3} md={6} sm={6} className="upper_box">
              <PerformanceCard />
            </Col>
            <Col xl={6} md={6} sm={6} className="growth_box">
              <ActivitiesBox />
            </Col>
            <Col lg={9}>
              <DailyTask
                workouts={workouts}
                title="Daily Task"
                routine="pull"
              />
            </Col>
            <Col lg={3} md={6} sm={6}>
              <ProfileCard
                profile={profile}
                name="jashan"
                weight="50 kg"
                location="mohali"
                age="20"
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
