"use client";
import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import Textarea from "@/components/common/textarea/textarea";
import Uploadbox from "@/components/common/uploadbox/uploadbox";
import { apiHelper } from "@/services/api.services";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

const PersonalInfo = () => {
  const router = useRouter();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .test(
          "email",
          "Must be a valid email or 10-digit mobile number",
          (value) =>
            Yup.string().email().isValidSync(value) ||
            /^[1-9]\d{9}$/.test(value || "")
        )
        .required("Email or mobile number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response: any = await apiHelper.post("/create", values);

        if (response?.status == 200 || response?.status == 201) {
          router.push("/dashboard");
          resetForm();
        }

        console.log("response", response);
        // resetForm();
      } catch (error) {
        console.log("errdwewor", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="personal_info">
        <Container>
          <div className="personal_info_in">
            <h1 className="big_heading ">personal information</h1>
            <form onSubmit={formik.handleSubmit}>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Age "
                      id="Age"
                      name="Age"
                      type="text"
                      placeholder="Enter Your Age "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Gender "
                      id="Gender"
                      name="Gender"
                      type="text"
                      placeholder="Enter Your Gender "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Body Weight "
                      id="Body Weight"
                      name="Body Weight"
                      type="text"
                      placeholder="Enter Body Weight "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Location "
                      id="Location"
                      name="Location"
                      type="text"
                      placeholder="Enter Location "
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      error={formik.touched.email ? formik.errors.email : ""}
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Uploadbox label="Update Your Profile Picture" />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Uploadbox label="Update Your physic Picture" />
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

export default PersonalInfo;
