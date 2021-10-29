import React from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/Blog/DetailBlog/DetailBlog";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import { Row, Col, Container } from "react-bootstrap";
const DetailBlog = () => {
  const params = useParams();
  return (
    <>
      <Container>
        <HeaderPage
          title={params.name}
          paths={[
            {
              name: "Hello",
              link: "/",
            },
          ]}
        />
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <BlogDetail />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailBlog;
