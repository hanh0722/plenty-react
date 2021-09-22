import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "../../layout/container/Container";
import Cart from "../Cart/Cart";
import FormPersonal from "../FormPersonal/FormPersonal";
import styles from "./Checkout.module.scss";
const Checkout = () => {
  return (
    <Container>
      <form>
        <Row className={`${styles["user--infor"]}`}>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3 className="text-center">Personal Information</h3>
            <FormPersonal />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <h3 className="text-center">Your Cart</h3>
            <Cart />
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default Checkout;
