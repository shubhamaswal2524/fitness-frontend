"use client";
import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import MarqueeBar from "@/components/common/marqueeBar/marqueeBar";
import Textarea from "@/components/common/textarea/textarea";
import { Col, Container, Row } from "react-bootstrap";

const ContactUs = () => {
  return (
    <>
      <section className="contact_us">
        <div className="contact_us_head">
          <h1 className="main_heading">
            Contact <span>US</span>
          </h1>
          <p>Home / Contact us</p>
        </div>
        <MarqueeBar />
        <Container>
          <div className="contact_us_in">
            <h1 className="main_heading ">
              Send Us <span>Message</span>
            </h1>
            <form>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Name"
                      id="Name"
                      name="Name"
                      type="text"
                      placeholder="Enter Your Name"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="E-mail "
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </Col>
                <Col lg={12}>
                  <div className="field_in">
                    <Input
                      label="Subject "
                      id="Subject"
                      name="Subject"
                      type="text"
                      placeholder="Enter Your Subject "
                    />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  {" "}
                  <div className="field_in">
                    <Textarea
                      label="About me"
                      name="message"
                      id="message"
                      cols={10}
                      rows={1}
                      placeholder="Enter Your Message"
                    />
                  </div>
                </Col>
              </Row>
              <div className="action">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
