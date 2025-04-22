"use client";

import Image from "next/image";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import user from "../../../../public/assets/user.png";
import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import { DumbleIcon } from "../../../../public/assets/icons";
import MoreAboutUp from "../moreAboutUs/moreAboutUs";
import MoreAboutUs from "../moreAboutUs/moreAboutUs";

const AboutMain = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      src: user,
      alt: "user",
      username: "Body Building",
      subhead:
        "High-intensity  workouts that alternate between intense bursts workouts that alternate between intense bursts of exe short recovery periods...",
    },
    {
      src: user,
      alt: "user",
      username: "Body Building",
      subhead:
        "High-intensity  workouts that alternate between intense bursts workouts that alternate between intense bursts of exe short recovery periods...",
    },
    {
      src: user,
      alt: "user",
      username: "Body Building",
      subhead:
        "High-intensity  workouts that alternate between intense bursts workouts that alternate between intense bursts of exe short recovery periods...",
    },
    {
      src: user,
      alt: "user",
      username: "Body Building",
      subhead:
        "High-intensity  workouts that alternate between intense bursts workouts that alternate between intense bursts of exe short recovery periods...",
    },
    {
      src: user,
      alt: "user",
      username: "Body Building",
      subhead:
        "High-intensity  workouts that alternate between intense bursts workouts that alternate between intense bursts of exe short recovery periods...",
    },
  ];

  return (
    <div className="about_main">
      <div className="about_head">
        <h1 className="main_heading">
          About <span>US</span>
        </h1>
        <p>Home / About</p>
      </div>
      <MarqueeBar />
        <MoreAboutUs/>
      <Container>
        <div className="user_slide_box">
          <div className="user_slide_box_head">
            <p><span><DumbleIcon/></span>Our Services</p>
            <h1 className="main_heading">Service We Provide</h1>
          </div>
          <Slider {...settings}>
            {data.map((item) => (
              <div className="inner_content">
                <Image src={item.src} alt={item.alt} />
                <h3>{item.username}</h3>
                <p>{item.subhead}</p>
                <CommonArrowButton>Read More</CommonArrowButton>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default AboutMain;
