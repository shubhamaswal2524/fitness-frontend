
"use client";
import { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../button/button";

const CommonOtp = (props: any) => {
  const [otp, setOtp] = useState("");
  return (
    <>
     <div className="common_otp">
      <h1 className="main_heading">OTP</h1>
     <div className="common_otp_in">
     <label>Enter OTP</label>
     <OTPInput

        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
      />
     </div>
     <Button  className="otp_action" >Submit</Button>
     </div>
    </>
  );
};

export default CommonOtp;
