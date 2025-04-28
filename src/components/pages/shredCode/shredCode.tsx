"use client";
import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import Textarea from "@/components/common/textarea/textarea";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import championImg from "../../../../public/assets/champion.png";
import { TimeIcon } from "../../../../public/assets/icons";
import FaqPage from "../faqPage/faqPage";

const ShredCode = () => {
  return (
    <>
      <section className="shred_code">
        <div className="shred_code_head">
          <h1 className="main_heading">
            shred <span>x</span>
          </h1>
          <p>Home / Shred x</p>
        </div>
        <MarqueeBar />
        <Container>
          <div className="shred_code_in">
            <div className="inner_left">
              <div className="champion_boxer_training">
                <Image src={championImg} alt="" />
                <h1 className="main_heading">Champion Boxer Training</h1>
                <ul>
                  <li>
                    Boxers engage in intense cardiovascular exercises to build
                    endurance and stamina. This includes activities like
                    running, skipping rope, and high-intensity interval training
                    (HIIT) to improve overall cardiovascular fitness. Strength
                    and Power Training: Boxers focus on building functional
                    strength and explosive power to deliver powerful punches.
                    This involves weightlifting exercises, plyometrics, and
                    bodyweight exercises such as push-ups, pull-ups, squats, and
                    core exercises.
                  </li>
                  <li>
                    During the CrossFit Boxing Challenge, you'll engage in a
                    dynamic workout regimen that incorporates elements of
                    strength training, cardiovascular conditioning, agility, and
                    coordination. Under the guidance of experienced coaches,
                    you'll learn proper boxing techniques, footwork, and
                    defensive maneuvers, all while pushing yourself through a
                    series of intense CrossFit workouts. Each session will
                    challenge your physical and mental resilience, building not
                    only strength but also enhancing your endurance and mental
                    toughness.
                  </li>
                </ul>
              </div>
              <div className="why_choose">
                <h1 className="main_heading">Why Choose Us</h1>
                <p>There are several reasons why you should choose us:</p>
                <div className="choose_box">
                  <div className="choose_box_in">
                    <h5> Diverse Range of Services:</h5>
                    <p>
                      We offer a wide range of fitness services and programs to
                      cater to different fitness levels, interests, and goals.
                    </p>
                  </div>
                  <div className="choose_box_in">
                    <h5> Diverse Range of Services:</h5>
                    <p>
                      We offer a wide range of fitness services and programs to
                      cater to different fitness levels, interests, and goals.
                    </p>
                  </div>
                </div>
              </div>
              <p>We offer a wide range of fitness services and programs to cater to different fitness levels, interests, and goals. Whether you're looking for personal training, group fitness classes, specialized workouts, or nutritional guidance, we have options to suit your needs.
</p>
            <div className="faq_box">
              <FaqPage/>
            </div>
            </div>
            <div className="inner_right">
              <div className="working_hours">
                <h1 className="main_heading">Working Hours</h1>
                <ul>
                  <li>
                    <TimeIcon />
                    Monday – Friday 1.00 – 2:00 pm
                  </li>
                  <li>
                    <TimeIcon />
                    Saturday 8.00 – 12:00 pm
                  </li>
                  <li>
                    <TimeIcon />
                    Sunday closed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ShredCode;
