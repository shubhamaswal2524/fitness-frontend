"use client";

import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { DumbleIcon, PlayIcon } from "../../../../public/assets/icons";
import Image from "next/image";
import Bloger from "../../../../public/assets/bloger.jpg";
import Link from "next/link";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  location: string;
}

const videoData: VideoData[] = [
  {
    id: "1",
    title: "Fitness Journey",
    thumbnail: "https://img.youtube.com/vi/uMzbVw-xj1I/maxresdefault.jpg",
    videoId: "uMzbVw-xj1I",
    duration: "10:05",
    location: "Mohali",
  },
  {
    id: "2",
    title: "Nutrition Unfiltered",
    thumbnail: "https://img.youtube.com/vi/9-dGp4NjCcc/maxresdefault.jpg",
    videoId: "9-dGp4NjCcc",
    duration: "0:59",
    location: "YouTube Shorts",
  },
  {
    id: "3",
    title: "SHREDCODE",
    thumbnail: "https://img.youtube.com/vi/vcxxqECHRbE/maxresdefault.jpg",
    videoId: "vcxxqECHRbE",
    duration: "0:59",
    location: "YouTube Shorts",
  },
  {
    id: "4",
    title: "Push Series",
    thumbnail: "https://img.youtube.com/vi/bVfXOWXsfsc/maxresdefault.jpg",
    videoId: "bVfXOWXsfsc",
    duration: "0:59",
    location: "YouTube Shorts",
  },
];

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
            <h1 className="main_heading">
              Featured <span>Talks</span> & <span>Stories</span>
            </h1>
            <Slider {...settings}>
              {videoData.map((video) => (
                <div key={video.id} className="inner_content">
                  <div className="bloger_img_box">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                    />
                    <Link
                      href={`https://www.youtube.com/watch?v=${video.videoId}`}
                      target="_blank"
                    >
                      <PlayIcon />
                      Watch More
                    </Link>
                  </div>
                  <div className="bloger_name">
                    <h3>{video.title}</h3>
                    <p>
                      {video.location} • {video.duration}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogList;
