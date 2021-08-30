import React from "react";
import Content from "../layout/Content/Content";
import styles from "./Service.module.scss";
import Container from "../layout/container/Container";
const Service = () => {
  return (
    <Content>
      <div className="text text-center">
        <Container>
          <h4>Over 10 years with tree care services in the US</h4>
          <h2>Experience Our Services</h2>
        </Container>
        <div className={styles.row}></div>
      </div>
    </Content>
  );
};

export default Service;
