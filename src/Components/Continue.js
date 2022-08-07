import React, { useState } from "react";
import "./Cart.css";
import { Button } from "reactstrap";

const Continue = ({ continueClass, user, setUser }) => {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mobile);
    console.log(user);
    setUser(true);
  };

  return (
    <div className={continueClass}>
      <div className="text-center">
        <strong>Login</strong>
      </div>
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="Enter your mobile number"
          className="mt-2 mb-1"
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
        <Button color="success" className="mt-2 mb-1" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default Continue;
