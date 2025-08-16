"use client";

import Button from "@/components/common/button/button";
import Input from "@/components/common/input/input";
import { ToastError, ToastSuccess } from "@/components/common/toast/toast";
import { useRegisterMutation } from "@/lib/slices/auth/authApiSlice";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

interface FormValues {
  name: string;
  phoneNumber: string;
  age: string;
  height: string;
  weight: string;
  email: string;
  bio: string;
}

const GetYourPlanToday = () => {
  const router = useRouter();
  const [register] = useRegisterMutation();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      phoneNumber: "",
      age: "",
      height: "",
      weight: "",
      email: "",
      bio: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot be more than 50 characters")
        .required("Name is required"),
      phoneNumber: Yup.string()
        .matches(
          /^[1-9]\d{9}$/,
          "Phone number must be exactly 10 digits and cannot start with 0"
        )
        .required("Phone number is required"),
      age: Yup.number()
        .min(1, "Age must be greater than 0")
        .max(120, "Age must be less than or equal to 120")
        .required("Age is required"),
      height: Yup.number()
        .min(50, "Height must be at least 50cm")
        .max(300, "Height must be realistic")
        .required("Height is required"),
      weight: Yup.number()
        .min(10, "Weight must be at least 10kg")
        .max(500, "Weight must be realistic")
        .required("Weight is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      bio: Yup.string()
        .max(500, "Bio cannot be more than 500 characters")
        .required("Bio is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await register({
          ...values,
          phoneNumber: values.phoneNumber.toString(),
        }).unwrap();

        if (response?.status === 200 || response?.status === 201) {
          // router.push("/login");
          resetForm();
          ToastSuccess("Thank you for Showing interest.");
        }
        console.log("Registration response:", response);
      } catch (error) {
        ToastError("Please try again.");
        console.error("Registration error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="get_your_plan_today">
      <Container>
        <form onSubmit={formik.handleSubmit} className="get_your_plan_today_in">
          <Row>
            <Col lg={6}>
              <Input
                label="Name"
                placeholder="Enter your name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name ? formik.errors.name : ""}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                type="text"
                error={
                  formik.touched.phoneNumber ? formik.errors.phoneNumber : ""
                }
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Age"
                placeholder="Enter your age"
                name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                type="number"
                error={formik.touched.age ? formik.errors.age : ""}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Height"
                placeholder="Enter your height"
                name="height"
                value={formik.values.height}
                onChange={formik.handleChange}
                type="number"
                error={formik.touched.height ? formik.errors.height : ""}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Weight"
                placeholder="Enter your weight"
                name="weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
                type="number"
                error={formik.touched.weight ? formik.errors.weight : ""}
              />
            </Col>
            <Col lg={6}>
              <Input
                label="Email"
                placeholder="Enter your email"
                name="email"
                // value={formData.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
                error={formik.touched.email ? formik.errors.email : ""}
              />
            </Col>
            <Col lg={12}>
              <label htmlFor="bio">Bio</label>
              <textarea
                placeholder="Enter your bio"
                name="bio"
                value={formik.values.bio}
                onChange={formik.handleChange}
                rows={3}
                className={`form-control ${
                  formik.touched.bio && formik.errors.bio ? "is-invalid" : ""
                }`}
              />
              {/* {touched.bio && errors.bio && (
                <div className="invalid-feedback">{errors?.bio}</div>
              )} */}
            </Col>
            <Col lg={12}>
              <Button
                className="custom_button"
                type="submit"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default GetYourPlanToday;
