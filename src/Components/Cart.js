import React from "react";
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import "./Cart.css";

const Cart = ({ cartItem, total, cartClassName, setCartClassName }) => {
  return (
    <div className={cartClassName}>
      <Container fluid>
        <ListGroup>
          <ListGroupItem>
            <div className="head">
              <h3>Cart Details</h3>
              <Button onClick={() => setCartClassName("hide")}>Close</Button>
            </div>
            <div className="listItemArea">
              {cartItem.map((item) => (
                <Row key={item.id} id="listItem">
                  <Col className="text-center">{item.title}</Col>
                  <Col className="text-center">{item.amount}</Col>
                  <Col className="text-center">${item.price}</Col>
                </Row>
              ))}
            </div>
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
