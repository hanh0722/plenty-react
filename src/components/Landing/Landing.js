import React from "react";
import { Row, Col } from "react-bootstrap";
import Container from "../layout/container/Container";
import Content from "../layout/Content/Content";
import banner from "../image/banner-1.jpeg";
import { Button } from "@material-ui/core";
import BannerImages from "../layout/Banner-images/BannerImages";
import styles from "./Landing.module.scss";
const Landing = () => {
  return (
    <Content>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={12} md={6} lg={6}>
            <BannerImages>
              <img src={banner} alt="banner" />
            </BannerImages>
          </Col>
          <Col className={`text ${styles.content}`} xs={12} sm={12} md={6} lg={6}>
              <h4>Fresh Finds</h4>
              <h2>Deck Out Your Patio This Summer</h2>
              <p>
                With eye-catching annual flowers and foliage you won’t find
                anywhere else, you can mix and match our vibrant container
                gardens to create beautiful gardens of any size.
              </p>
              <Button className={styles.button} variant="contained">Shop Indoor</Button>
          </Col>
        </Row>
      </Container>
    </Content>
  );
};

export default Landing;
