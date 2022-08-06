import React from "react";
import { Button } from "reactstrap";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bot">
      <Button color="success">
        1 Item(s) <br /> Total $10
      </Button>
      <Button color="success">Continue</Button>
    </div>
  );
};

export default BottomNav;
