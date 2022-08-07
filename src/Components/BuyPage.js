import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import CartItem from "./CartItem";
import list from "../data";

const BuyPage = ({ addInCart, handleChange }) => {
  return (
    <Container fluid>
      <ListGroup>
        {list.map((item) => (
          <ListGroupItem key={item.id} className="mt-2 mb-1">
            <CartItem
              item={item}
              addInCart={addInCart}
              handleChange={handleChange}
            />
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default BuyPage;
