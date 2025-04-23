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
import { useUpdateProfileMutation } from "@/lib/slices/user/userApiSlice";

interface FormValues {
  name: string;
  age: string;
  gender: string;
  weight: string;
  height: string;
  location: string;
  description: string;
  profilePicture: string;
  physiquePicture: string;
  email: string;
  password: string;
}

const PersonalInfo = () => {
  const router = useRouter();
  const [updateProfile] = useUpdateProfileMutation();
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      weight: "",
      height: "",
      location: "",
      description: "",
      profilePicture: "",
      physiquePicture: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      age: Yup.number()
        .typeError("Age must be a number")
        .min(1, "Age must be at least 1")
        .max(120, "Age must be less than or equal to 120")
        .required("Age is required"),
      gender: Yup.string().required("Gender is required"),
      weight: Yup.number()
        .typeError("Weight must be a number")
        .positive("Weight must be positive")
        .required("Weight is required"),
      height: Yup.number()
        .typeError("Height must be a number")
        .positive("Height must be positive")
        .required("Height is required"),
      location: Yup.string().required("Location is required"),
      description: Yup.string()
        .max(1000, "Description cannot exceed 1000 characters")
        .required("Description is required"),
      profilePicture: Yup.string().required("Profile picture is required"),
      physiquePicture: Yup.string().required("Physique picture is required"),
      email: Yup.string()
        .test(
          "email-or-phone",
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
        const response: any = await updateProfile(values).unwrap();

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
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      error={formik.touched.name ? formik.errors.name : ""}
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
                      disabled
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
                      label="Gender"
                      id="gender"
                      name="gender"
                      type="text"
                      placeholder="Enter Your Gender"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.gender}
                      error={formik.touched.gender ? formik.errors.gender : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Body Weight"
                      id="weight"
                      name="weight"
                      type="text"
                      placeholder="Enter Body Weight"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.weight}
                      error={formik.touched.weight ? formik.errors.weight : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="field_in">
                    <Input
                      label="Height"
                      id="height"
                      name="height"
                      type="text"
                      placeholder="Enter Height"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.height}
                      error={formik.touched.height ? formik.errors.height : ""}
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Input
                      label="Location"
                      id="location"
                      name="location"
                      type="text"
                      placeholder="Enter Location"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.location}
                      error={
                        formik.touched.location ? formik.errors.location : ""
                      }
                    />
                  </div>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  {" "}
                  <div className="field_in">
                    <Textarea
                      label="About Me"
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Enter your description"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.description}
                      error={
                        formik.touched.description
                          ? formik.errors.description
                          : ""
                      }
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Uploadbox
                      label="Update Your Profile Picture"
                      onChange={(value: string) =>
                        formik.setFieldValue("profilePicture", value)
                      }
                    />
                  </div>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {" "}
                  <div className="field_in">
                    <Uploadbox
                      label="Update Your physic Picture"
                      onChange={(value: string) =>
                        formik.setFieldValue("physiquePicture", value)
                      }
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

export default PersonalInfo;
