import React from "react";
import "./Checkout.css";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "reactstrap";

const Checkout = ({ setUser, cartItem, total }) => {
  return (
    <>
      <div className="head">
        <button
          onClick={() => {
            setUser(false);
          }}
        >
          Back to Product Listing
        </button>
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
                <Row>
                  <Col className="text-center">{item.title}</Col>
                  <Col className="text-center">{item.amount}</Col>
                  <Col className="text-center">${item.price}</Col>
                </Row>
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
              alert("Order Successful");
              setUser(false);
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
