import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../../components/DashBoard/layout/Container";
import FormUser from "../../components/DashBoard/UserInformation/FormUser/FormUser";
import Navigation from "../../components/DashBoard/UserInformation/Navigation";
const UserInformation = () => {
  return (
    <Container>
      <Navigation />
      <Row>
        <Col xs={12} sm={12} md={5} lg={5}>
          <FormUser />
        </Col>
      </Row>
    </Container>
  );
};

export default UserInformation;
