"use client";

import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { DumbleIcon } from "../../../../public/assets/icons";
import Image from "next/image";
import Bloger from "../../../../public/assets/bloger.jpg";

const BlogList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="blogList_page">
        <Container>
          <div className="blogList_page_in">
            <p>
              <span>
                <DumbleIcon />
              </span>
              Our Services
            </p>
            <h1 className="main_heading">Service We Provide</h1>
            <Slider {...settings}>
            <div className="inner_content">
                <Image className=" bloger_img" src={Bloger} alt="" />
                <div className="bloger_name">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div className="inner_content">
                <Image className=" bloger_img" src={Bloger} alt="" />
                <div className="bloger_name">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
              <div className="inner_content">
                <Image className=" bloger_img" src={Bloger} alt="" />
                <div className="bloger_name">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogList;
