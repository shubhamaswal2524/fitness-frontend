"use client";

import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const GetYourPlanToday = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    height: "",
    weight: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // You can add your API call or other submission logic here
  };

  return (
    <div className="get_your_plan_today">
      <Container>
        <form onSubmit={handleSubmit} className="get_your_plan_today_in">
          <Row>
            <Col lg={6}>
              <Input
                label="Name"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                type="number"
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Age"
                placeholder="Enter your age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                type="number"
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Height"
                placeholder="Enter your height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                type="number"
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Weight"
                placeholder="Enter your weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                type="number"
              />
            </Col>
              <Col lg={6}>
              <Input
                label="Email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                onChange={handleChange}
                type="email"
              />
            </Col>
            <Col lg={12}>
            <label htmlFor="bio">Bio</label>
              <textarea
                placeholder="Enter your bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
              />
            </Col>
            <Col lg={12}>
              <Button className="custom_button" type="submit">Submit</Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default GetYourPlanToday;