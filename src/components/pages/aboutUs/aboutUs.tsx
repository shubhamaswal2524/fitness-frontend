import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import banner from "../../../../public/assets/aboutusimg.png"
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn"
import { DumbleIcon } from "../../../../public/assets/icons"

const AboutPage = () => {
    return (
      <section className='about_page'>
       <Container>
        <div className="about_page_in">
        <Row>
            <Col lg={6}>
            <div className="about_page_left">
                <Image src={banner} alt=""/>
            </div>
            </Col>
            <Col lg={6}>
            <div className="about_page_right">
                <p>
                    <DumbleIcon /> About Me
                  </p>
                <h2>Building Strength, Health & Confidence 
                <span>Together</span></h2>
                <p>My name is Arsh Sandhu. I am a certified strength coach, nutritionist, and personal trainer. Build for you the safest and most effective exercise and nutrition program possible, and make sure you have the absolute best experience every time we train together.</p>
                <ul>
                    <li><span>01</span>Fitness Trainner</li>
                    <li><span>02</span>Body Building</li>
                </ul>
                <p>Gradually increasing the intensity, duration, or complexity of exercises ensures ongoing improvements in strength, endurance, and overall fitness.</p>
              <div className="action_box">
              <CommonArrowButton>Read More</CommonArrowButton>
              </div>
            </div>
            </Col>
        </Row>
        </div>
       </Container>
      </section>
    )
  }
  
  export default AboutPage
  