import React from "react";
import { Container } from "react-bootstrap";
import styles from './Preview.module.scss';
import DetailBlog from '../../../../views/DetailBlog';
const Preview = () => {
  return (
    <div className={styles.preview}>
      <Container>
        <DetailBlog/>
      </Container>
    </div>
  );
};

export default Preview;
