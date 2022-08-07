import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import "./BottomNav.css";

const BottomNav = ({ NOI, total }) => {
  return (
    <div className="bot">
      <Button color="success">
        {NOI} Item(s) <br /> Total ${total}
      </Button>
      <Button color="success">Continue</Button>
    </div>
  );
};

export default BottomNav;
