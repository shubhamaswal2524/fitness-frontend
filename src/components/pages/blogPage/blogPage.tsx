"use client";
import Image from "next/image";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import demo from "../../../../public/assets/blog_img.png";
import Masonry from "react-masonry-css";
import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";

const BlogPage = () => {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 1,
    500: 1,
  };

  const blogPosts = [
    {
      id: 1,
      date: '25 June, 2023',
      author: 'Admin',
      title: 'Most Traditional Gym Fitness Blog 2023',
      description: 'Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted within our gym.',
    },
    {
      id: 2,
      date: '25 June, 2023',
      author: 'Admin',
      title: 'Another Great Fitness Article',
      description: 'This is another blog post with more interesting content about health and wellness...',
    },
    {
      id: 3,
      date: '25 June, 2023',
      author: 'Admin',
      title: 'Tips for a Healthy Lifestyle',
      description: 'Here are some valuable tips to help you maintain a healthy and balanced lifestyle...',
    },
    {
      id: 4,
      date: '25 June, 2023',
      author: 'Admin',
      title: 'The Benefits of Regular Exercise',
      description: 'Discover the numerous physical and mental health benefits of incorporating regular exercise into your routine...',
    },
    // Add more blog post objects here
  ];
  
  return (
    <>
      <div className="blog_page">
        <div className="blog_head">
          <h1 className="main_heading">Blog</h1>
          <p>Home / blog</p>
        </div>
        <MarqueeBar />
        <Container>
          <div className="blog_page_in">
            <Row>
            {blogPosts.map((post) => (
        <Col lg={6}  key={post.id}>
          <div className="blog_card">
            <Image src={demo} alt="Fitness Gym" className="card-image" />
            <div className="card-content">
              <div className="card-subtitle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{`${post.date} | Post by ${post.author}`}</span>
              </div>
              <h2 className="card-title">{post.title}</h2>
              <p className="card-description">{post.description}</p>
              <CommonArrowButton>Read More</CommonArrowButton>
            </div>
          </div>
        </Col>
      ))}
            </Row>
             
          </div>
        </Container>
      </div>
    </>
  );
};

export default BlogPage;
