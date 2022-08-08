import React, { useState, useContext } from "react";
import "./Cart.css";
import { Button } from "reactstrap";
import { Navigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "../config/Firebase";
import { UserContext } from "../Context/UserContext";
import Checkout from "./Checkout";

const Continue = ({ continueClass, cartItem, total }) => {
  const countryCode = "+91";
  const [mobile, setMobile] = useState(countryCode);
  const [expand, setExpand] = useState(false);
  const [otp, setOtp] = useState("");
  const context = useContext(UserContext);

  const generateCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "captcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      },
      authentication
    );
  };

  const sendOtp = (e) => {
    e.preventDefault();

    if (mobile.length >= 12) {
      setExpand(true);
      generateCaptcha();
      let appverifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, mobile, appverifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const verifyOtp = (e) => {
    // e.preventDefault();
    let otp = e.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          context.setUser(user);
          // ...
          console.log(user);
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    }
  };

  return (
    <>
      {context.user ? (
        <></>
      ) : (
        <>
          <div className={continueClass}>
            <div className="text-center">
              <strong>Login</strong>
            </div>
            <form className="input" onSubmit={sendOtp}>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="mt-2 mb-1"
                onChange={(e) => setMobile(e.target.value)}
                value={mobile}
              />
              {expand ? (
                <>
                  <input
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={verifyOtp}
                    className="mb-2"
                  />
                </>
              ) : (
                <>
                  <Button color="success" className="mt-2 mb-1" type="submit">
                    Send Otp
                  </Button>
                </>
              )}
            </form>
            <div id="captcha"></div>
          </div>
        </>
      )}
    </>
  );
};
export default Continue;
