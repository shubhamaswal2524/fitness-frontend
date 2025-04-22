import Image from "next/image"
import { Col, Container, Row } from "react-bootstrap"
import banner from "../../../../public/assets/aboutusimg.png"
import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn"

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
                <h5></h5>
                <h2>A Roadmap to Total Body
                <span>fitness</span></h2>
                <p>Body fitness encompasses various aspects of physical health and well-being, involving a combination of exercise, nutrition, and lifestyle choices. Achieving and maintaining optimal body fitness contributes to overall health, vitality. Joining fitness classes, sports teams, or workout groups provides social support.</p>
                <ul>
                    <li>
                    <span>01</span>Fitness Training</li>
                    <li><span>02</span>Regular Routine</li>
                </ul>
                <p>Gradually increasing the intensity, duration, or complexity of exercises ensures ongoing improvements in strength, endurance, and overall fitness.</p>
              <div className="action_box">
              <CommonArrowButton >more about us</CommonArrowButton>
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
  