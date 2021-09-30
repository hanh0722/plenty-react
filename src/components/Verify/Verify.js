import React, { useRef } from "react";
import Container from "../layout/container/Container";
import BoxVerify from "./BoxVerify/BoxVerify";
import styles from "./Verify.module.scss";
import { Button } from "@material-ui/core";
const Verify = () => {
  const firstInputRef = useRef();
  const secondInputRef = useRef();
  const thirdInputRef = useRef();
  const fourthInputRef = useRef();
  const submitVerifyHandler = (event) => {
    event.preventDefault();
    console.log(firstInputRef.current.value);
  };
  return (
    <Container>
      <p className={`text-center ${styles.title}`}>Press 4 number OTP in your email!</p>
      <form
        onSubmit={submitVerifyHandler}
        className={`${styles["form--verify"]} text-center`}
      >
        <div className={`d-flex justify-content-center align-items-center`}>
          <BoxVerify ref={firstInputRef} />
          <BoxVerify ref={secondInputRef} />
          <BoxVerify ref={thirdInputRef} />
          <BoxVerify ref={fourthInputRef} />
        </div>
        <Button variant='contained' type='submit' className={styles.submit}>Submit</Button>
      </form>
    </Container>
  );
};

export default Verify;
