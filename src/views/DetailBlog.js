import React from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/Blog/DetailBlog/DetailBlog";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import { Row, Col, Container } from "react-bootstrap";
import RecentBlog from "../components/Blog/RecentBlog/RecentBlog";
import CategoriesBlog from "../components/Blog/CategoriesBlog/CategoriesBlog";
import RecentPost from "../components/Blog/RecentPost/RecentPost";
import styles from "../styles/DetailBlog.module.scss";
const DetailBlog = ({ data }) => {
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
            <RecentBlog />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className={styles.container}>
            <CategoriesBlog />
            <RecentPost />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailBlog;
