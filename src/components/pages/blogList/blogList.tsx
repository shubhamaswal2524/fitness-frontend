"use client";

import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { DumbleIcon, PlayIcon } from "../../../../public/assets/icons";
import Image from "next/image";
import Bloger from "../../../../public/assets/bloger.jpg";
import Link from "next/link";

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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
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
              Our Blog
            </p>
            <h1 className="main_heading">Featured <span>Talks</span> & <span>Stories</span></h1>
            <Slider {...settings}>
              <div className="inner_content">
                <div className="bloger_img_box">
                  <Image src={Bloger} alt="" />
                  <Link href={"_blank"}><PlayIcon/>Watch More</Link>
                </div>
                <div className="bloger_name">
                  <h3>jashanpreet singh</h3>
                  <p>mohali</p>
                </div>
              </div>
              <div className="inner_content">
                <div className="bloger_img_box">
                  <Image src={Bloger} alt="" />
                  <Link href={"_blank"}><PlayIcon/>Watch More</Link>
                </div>
                <div className="bloger_name">
                  <h3>jashanpreet singh</h3>
                  <p>mohali</p>
                </div>
              </div>
              <div className="inner_content">
                <div className="bloger_img_box">
                  <Image src={Bloger} alt="" />
                  <Link href={"_blank"}><PlayIcon/>Watch More</Link>
                </div>
                <div className="bloger_name">
                  <h3>jashanpreet singh</h3>
                  <p>mohali</p>
                </div>
              </div>
              <div className="inner_content">
                <div className="bloger_img_box">
                  <Image src={Bloger} alt="" />
                  <Link href={"_blank"}><PlayIcon/>Watch More</Link>
                </div>
                <div className="bloger_name">
                  <h3>jashanpreet singh</h3>
                  <p>mohali</p>
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
