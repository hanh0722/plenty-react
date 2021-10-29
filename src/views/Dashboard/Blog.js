import React from "react";
import BlogDashBoard from "../../components/DashBoard/Blog/Blog";
import Container from "../../components/DashBoard/layout/Container";
import { Row, Col } from "react-bootstrap";
import Options from "../../components/DashBoard/Blog/Options/Options";
const Blog = () => {
  return (
    <>
      <Container>
        <form>
          <Row>
            <Col xs={12} sm={12} md={8} lg={8}>
              <BlogDashBoard />
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <Options />
            </Col>
          </Row>
        </form>
      </Container>
    </>
  );
};

export default Blog;
