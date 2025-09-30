"use client";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/common/input/input";
import Select from "@/components/common/select/select";
import Button from "@/components/common/button/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowIcon } from "../../../../../public/assets/icons";
import CommonCheckbox from "@/components/common/commonCheckbox/commonCheckbox";
import { useRegisterMutation } from "@/lib/slices/auth/authApiSlice"; // No longer needed

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  package: string;
  height: string;
  weight: string;
}

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [register] = useRegisterMutation(); // No longer needed

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      package: "",
      height: "",
      weight: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name cannot be more than 50 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name cannot be more than 50 characters")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .max(100, "Email cannot be more than 100 characters")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(
          /^[1-9]\d{9}$/,
          "Mobile number must be exactly 10 digits and cannot start with 0"
        )
        .required("Mobile number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      package: Yup.string()
        .oneOf(["package1", "package2", "package3"], "Please select a package")
        .required("Package is required"),
      height: Yup.string()
        .matches(/^\d+(\.\d+)?$/, "Height must be a valid number")
        .required("Height is required"),
      weight: Yup.string()
        .matches(/^\d+(\.\d+)?$/, "Weight must be a valid number")
        .required("Weight is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Prepare the payload according to the required API fields
        // Map form values to API expected fields
        const payload = {
          name: `${values.firstName} ${values.lastName}`,
          height: values.height,
          weight: values.weight,
          age: 30,
          bio: "I am a fitness enthusiast",
          email: values.email,
          phoneNumber: values.phoneNumber?.toString(),
        };

        console.log("Prepared payload for registration:", payload);

        const response = await register(payload).unwrap();

        if (response?.status == 200 || response?.status == 201) {
          const {
            firstName,
            lastName,
            email,
            phoneNumber,
            package: selectedPackage,
          } = values;
          let packageLabel = "";
          if (selectedPackage === "package1") packageLabel = "Package 1";
          else if (selectedPackage === "package2") packageLabel = "Package 2";
          else if (selectedPackage === "package3") packageLabel = "Package 3";
          else packageLabel = selectedPackage;

          const message = `My name is ${firstName} ${lastName}, my email is ${email}, and my mobile number is ${phoneNumber}. I have selected the ${packageLabel} package. My height is ${values.height} and my weight is ${values.weight}. It is a pleasure joining you and I look forward to starting my fitness journey with your team.`;
          const encodedMessage = encodeURIComponent(message);
          const whatsappNumber = "9689400002";
          const whatsappAppUrl = `whatsapp://send?phone=91${whatsappNumber}&text=${encodedMessage}`;
          const whatsappWebUrl = `https://wa.me/91${whatsappNumber}?text=${encodedMessage}`;

          // Delay 3 seconds, then open or redirect to WhatsApp
          setTimeout(() => {
            // Try to open WhatsApp app
            const win = window.open(whatsappAppUrl, "_blank");
            // If app is not installed or cannot be opened, fallback to web after a short delay
            setTimeout(() => {
              if (win) {
                win.location = whatsappWebUrl;
              } else {
                window.open(whatsappWebUrl, "_blank");
              }
            }, 1000);
          }, 3000);

          // Optionally reset the form
          resetForm();
          router.push("/");
        }

        console.log("response", response);
        // resetForm();
      } catch (error) {
        console.log(
          "Error during registration or redirecting to WhatsApp",
          error
        );
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <section className="signup">
        <Container>
          <div className="login_in">
            <div className="back_button_container">
              <Link href="/" className="back_button">
                <ArrowIcon />
                <span>Back to Login</span>
              </Link>
            </div>
            <h1 className="main_heading ">
              Sign<span>up</span>
            </h1>

            <form onSubmit={formik.handleSubmit}>
              <div className="field_in">
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email ? formik.errors.email : ""}
                />
              </div>
              <div className="field_in">
                <Input
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName ? formik.errors.firstName : ""
                  }
                />
              </div>
              <div className="field_in">
                <Input
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  error={formik.touched.lastName ? formik.errors.lastName : ""}
                />
              </div>
              <div className="field_in">
                <Input
                  label="Mobile number"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  error={
                    formik.touched.phoneNumber ? formik.errors.phoneNumber : ""
                  }
                />
              </div>
              <div className="field_in">
                <Input
                  label="Height (cm)"
                  id="height"
                  name="height"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.height}
                  error={formik.touched.height ? formik.errors.height : ""}
                />
              </div>
              <div className="field_in">
                <Input
                  label="Weight (kg)"
                  id="weight"
                  name="weight"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.weight}
                  error={formik.touched.weight ? formik.errors.weight : ""}
                />
              </div>
              <div className="field_in">
                <Select
                  label="Select Package"
                  id="package"
                  name="package"
                  placeholder="Select a package"
                  value={formik.values.package}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.package ? formik.errors.package : ""}
                  options={[
                    { value: "package1", label: "Package 1" },
                    { value: "package2", label: "Package 2" },
                    { value: "package3", label: "Package 3" },
                  ]}
                  required
                />
              </div>
              <div className="field_in password_field">
                <Input
                  label="Password"
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  error={formik.touched.password ? formik.errors.password : ""}
                  // icon={
                  //   // 👁️ Eye toggle logic
                  //   <span
                  //     onClick={() => setShowPassword(!showPassword)}
                  //     style={{ cursor: "pointer" }}
                  //   >
                  //     {showPassword ? "🙈" : "👁️"}
                  //   </span>
                  // }
                />
              </div>
              <CommonCheckbox
                className="sign_in_check"
                id="terms"
                label="Terms and conditions"
              />
              <Button type="submit">Submit</Button>
              <p className="login_para">
                Already have an account?{" "}
                <Link href="/login">Back to Login</Link>
              </p>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Signup;
