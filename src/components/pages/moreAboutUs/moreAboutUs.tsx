"use client";
import Image from "next/image";
import { Col, Container, Nav, NavDropdown, Row, Tab } from "react-bootstrap";
import leftImg from "../../../../public/assets/bmiImgparson.png";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
const MoreAboutUs = () => {
  return (
    <>
      <div className="more_About_Us">
        <Container>
          <div className="more_About_Us_in">
            <Row>
              <Col lg={6}>
                <div className="more_About_Us_right">
                  <h2>
                    Unlock Your Full Potential, Achieve Your<span>Goals.</span>
                  </h2>
                  <p>
                    Welcome to Fitmas. your ultimate destination for achieving
                    your fitness goals. We understand the importance of leading
                    a healthy lifestyle and provide a top-notch fitness facility
                    to support you in your fitness journey.
                  </p>
                  <div className="tabs_box">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="tabs" className="nav">
              <Nav.Item>
                <Nav.Link eventKey="first">Our Vision</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Our Goal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Our Goal</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">Gyms play a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.
              </Tab.Pane>
              <Tab.Pane eventKey="second">Gyms play a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.</Tab.Pane>
            <Tab.Pane eventKey="third">Gyms play a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
                  <CommonArrowButton>Make Appointment</CommonArrowButton>
                </div>
              </Col>
              <Col lg={6}>
                <div className="more_About_Us_left">
                  <Image src={leftImg} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MoreAboutUs;
