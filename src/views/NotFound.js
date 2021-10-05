import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";
import styles from "../components/NotFound/NotFound.module.scss";
import Container from "../components/layout/container/Container";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {HOME_PAGE} from '../components/link/link';
const NotFound = () => {
  return (
    <>
      <Container>
        <div className={styles.page}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFrown} />
          </div>
          <div className={`${styles.content} text-center`}>
            <h4>404</h4>
            <p>Oops! The url you're looking for not being existed</p>
            <p>Maybe URL is removed or wrong</p>
            <Link to={HOME_PAGE}><Button>Go To Home</Button></Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
