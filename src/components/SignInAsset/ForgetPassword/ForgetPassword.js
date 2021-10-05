import React from "react";
import styles from "../LoginForm/Form.module.scss";
import classes from "./ForgetPassword.module.scss";
import NormalInput from "../../input/NormalInput/NorInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import useInput from "../../../hook/use-input";
import { CSSTransition } from "react-transition-group";
const ForgetPassword = () => {
  const { value, valid, touchedInputHandler, isTouched, changeInputHandler } =
    useInput(
      (valueEmail) => valueEmail.trim().length > 0 && valueEmail.includes("@")
    );
  return (
    <div className={styles.form}>
      <div className={`${styles.input}`}>
        <label htmlFor="email">Email</label>
        <div className={classes.input}>
          <FontAwesomeIcon icon={faEnvelope} />
          <NormalInput
            input={{
              type: "email",
              autoComplete: "off",
              value: value,
              onChange: changeInputHandler,
              onBlur: touchedInputHandler,
              placeholder: 'Email...'
            }}
            className={!valid && isTouched && 'error__input'}
          />
        </div>
        <CSSTransition in={!valid && isTouched} unmountOnExit mountOnEnter timeout={500} classNames='scale'>
           <p className={`error__text`}>Please fill out the email!</p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default ForgetPassword;
