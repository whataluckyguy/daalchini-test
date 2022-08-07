import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import "./Cart.css";

const Cart = ({ cartItem, total, cartClassName }) => {
  return (
    <div className={cartClassName}>
      <Container fluid>
        <ListGroup>
          <ListGroupItem>
            <div className="text-center">
              <h3>Cart Details</h3>
            </div>
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
    </div>
  );
};

export default Cart;
