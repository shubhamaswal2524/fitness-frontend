"use client"; // if you're using app router

import { useEffect } from "react";
import gsap from "gsap";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../../../../../public/assets/heroimg.png";
import arrowimg from "../../../../../public/assets/Container.png";

// gsap.registerPlugin(SplitText);

const Hero = () => {
  // useEffect(() => {
  //   const split = new SplitText("#split_text", { type: "chars" });
  //   gsap.from(split.chars, {
  //     duration: 1,
  //     y: 100,
  //     autoAlpha: 0,
  //     stagger: 0.05,
  //   });
  // }, []);

  return (
    <section className="hero">
      <Container>
        <div className="hero_in">
          <Row>
            <Col lg={6}>
              <div className="in_left">
                <h1 id="split_text">
                  Your body can <span>stand almost</span> anything.
                </h1>
                <p>
                  Push past your limits, stay committed, and watch as your
                  body transforms into a powerhouse of strength and resilience.
                </p>
                <div className="count_box">
                  <h2>20+</h2>
                  <p>Years of Experience</p>
                </div>
                <CommonArrowButton className="border_arro_btn">
                  Explore More
                </CommonArrowButton>
              </div>
            </Col>
            <Col lg={6}>
              <div className="in_right">
                <div className="right_banner">
                  <Image src={heroimg} alt="Hero" />
                </div>
                <div className="arrow_box">
                  <Image src={arrowimg} alt="Arrow" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
