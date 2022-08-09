import React, { useContext, useState } from "react";
import "./Checkout.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";

const Checkout = ({ setUser, cartItem, total }) => {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className="head">
        <Button onClick={backToHome}>Back to Product Listing</Button>
        <h3>Checkout</h3>
      </div>
      <div className="main">
        <Container fluid className="mt-2">
          <ListGroup>
            <ListGroupItem>
              <div className="text-center">
                <h3>Cart Details</h3>
              </div>
              <Row className="text-center">
                <Col>Item</Col>
                <Col>Qty</Col>
                <Col>Price</Col>
              </Row>
              {cartItem.map((item) => (
                <>
                  <Row>
                    <Col className="text-center">{item.title}</Col>
                    <Col className="text-center">{item.amount}</Col>
                    <Col className="text-center">${item.price}</Col>
                  </Row>
                  <hr />
                </>
              ))}
              <Row>
                <Col className="text-center">
                  <strong>Total Price</strong>
                </Col>
                <Col className="text-center"> </Col>
                <Col className="text-center">
                  <strong>${total}</strong>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Container>
        <div className="payButton">
          <Button
            color="success"
            onClick={() => {
              toast("Order Successful", { type: "success", theme: "colored" });
            }}
          >
            Payment
          </Button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
