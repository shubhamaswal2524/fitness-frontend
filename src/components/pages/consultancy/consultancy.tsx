import CommonArrowButton from "@/components/common/commonArrowBtn/commonArrowBtn";
import { Col, Container, Row } from "react-bootstrap";
import { CallIcon } from "../../../../public/assets/icons";

const Consultancy = () => {
  return (
    <>
      <div className="consultancy">
        <Container>

        <Row>
          <Col lg={6}>
            <div className="consultancy_left"></div>
          </Col>
          <Col lg={6}>
            <div className="consultancy_right">
              <h1 className="main_heading">
                Get a <span>Free Consultancy</span>Right Now Here!
              </h1>
              <div className="contact_number">
                <CallIcon/>
                <div>
                  <h4>Need Help?</h4>
                  <p>+91-123-456-789</p>
                </div>
              </div>
              <CommonArrowButton>Make Appointment</CommonArrowButton>
            </div>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  );
};

export default Consultancy;
