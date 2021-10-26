import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../../components/DashBoard/layout/Container";
import FormUser from "../../components/DashBoard/UserInformation/FormUser/FormUser";
import Navigation from "../../components/DashBoard/UserInformation/Navigation";
import DataForm from "../../components/DashBoard/UserInformation/FormUser/DataForm/DataForm";
const UserInformation = () => {
  return (
    <Container>
      <Navigation />
      <Row>
        <Col xs={12} sm={12} md={5} lg={5}>
          <FormUser />
        </Col>
        <Col xs={12} sm={12} md={7} lg={7}>
          <DataForm/>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInformation;
