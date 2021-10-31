import React from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/Blog/DetailBlog/DetailBlog";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import { Row, Col, Container } from "react-bootstrap";
import RecentBlog from "../components/Blog/RecentBlog/RecentBlog";
import CategoriesBlog from "../components/Blog/CategoriesBlog/CategoriesBlog";
import RecentPost from "../components/Blog/RecentPost/RecentPost";
import styles from "../styles/DetailBlog.module.scss";
const DetailBlog = ({
  data,
  title,
  previewMode,
  paths,
  category,
  user,
  timeCreated,
  content_blog,
  children
}) => {
  const params = useParams();
  return (
    <>
      <Container>
        <HeaderPage
          title={title}
          paths={
            previewMode
              ? paths
              : [
                  {
                    name: "Hello",
                    link: "/",
                  },
                ]
          }
        />
        <Row>
          <Col xs={12} sm={12} md={8} lg={8}>
            <BlogDetail
              category={category}
              user={user?.name}
              timeCreated={timeCreated}
              contentBlog={content_blog}
              title={title}
            />
            {!previewMode && <RecentBlog />}
            {children}
          </Col>
          <Col xs={12} sm={12} md={4} lg={4} className={styles.container}>
            {category && <CategoriesBlog category={category} />}
            {!previewMode && <RecentPost />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailBlog;
