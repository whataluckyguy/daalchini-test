import React from "react";
import { Container, Col, Row, ListGroup, ListGroupItem } from "reactstrap";
import CartItem from "./CartItem";

const BuyPage = ({ addInCart, product }) => {
  return (
    <Container fluid>
      <ListGroup>
        {product.map((product) => (
          <ListGroupItem key={product.id} className="mt-2 mb-1">
            <CartItem product={product} addInCart={addInCart} />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default BuyPage;
