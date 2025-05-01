import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import {
  BallIcon,
  ContactIcon,
  FBIcon,
  InstaIcon,
  MsgIcon,
  RightArrow,
} from "../../../../public/assets/icons";
import logo from "../../../../public/assets/mainlogo.png";
import { useContactUsMutation } from "@/lib/slices/user/userApiSlice";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [contactUs] = useContactUsMutation();

  const contactUsFunction = async () => {
    const response = await contactUs({ email }).unwrap();
    console.log("response", response);
    if (response?.status == 200 || response?.status == 201) {
      alert(response.message || "");
      setEmail("");
    }
  };
  return (
    <>
      <section className="footer">
        <Container>
          <div className="footer_in">
            <Row>
              <Col lg={5}>
                <div className="logo_box">
                  <Link href={"/"}>
                    <Image src={logo} alt="" />
                  </Link>
                  <p>
                    Push harder, go further. Your fitness journey starts today!
                  </p>
                  <div className="box_input">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      maxLength={50}
                    />
                    <button
                      className="input_btn"
                      onClick={() => contactUsFunction()}
                    >
                      <RightArrow />
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="list_box">
                  <div className="inner_box">
                    <h3>contact us</h3>
                    <ul>
                      <li>
                        <Link href={""}>
                          <ContactIcon />
                          +91 123 456 789
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>
                          <MsgIcon />
                          info@arshsandhu.com
                        </Link>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="inner_box">
                    <h3>Our location</h3>
                    <ul>
                      <li>
                        <Link href={""}>Wave Estate Mohali</Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>
                          Sector 85, Sahibzada Ajit Singh Nagar
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href={""}>Punjab (140308) In</Link>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="bottom_footer">
            <p>Copyright © 2025 All Rights Reserved.</p>
            <div className="icon_box">
              <InstaIcon />
              <BallIcon />
              <FBIcon />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
