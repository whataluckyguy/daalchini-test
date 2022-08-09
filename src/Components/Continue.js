import React, { useState, useContext } from "react";
import "./Cart.css";
import { Button, Card } from "reactstrap";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { authentication } from "../config/Firebase";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Continue = ({ continueClass, setContinueClassName }) => {
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
      // here
      toast("OTP Sent!", { type: "info" });
    }
  };

  const verifyOtp = () => {
    // e.preventDefault();

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
          toast("Logged In Successfully", {
            type: "success",
            theme: "colored",
          });
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
          toast(error, { type: "warning", theme: "colored" });
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
            <Card fluid>
              <div className="head login">
                <h3>Login</h3>
                <Button onClick={() => setContinueClassName("hide")}>
                  Close
                </Button>
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
                      onChange={(e) => setOtp(e.target.value)}
                      className="mb-2"
                      maxLength={6}
                    />
                    <Button className="mb-2" onClick={() => verifyOtp()}>
                      Verify OTP
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="success" className="mt-2 mb-1" type="submit">
                      Send Otp
                    </Button>
                  </>
                )}
              </form>
            </Card>
            <div id="captcha"></div>
          </div>
        </>
      )}
    </>
  );
};
export default Continue;
