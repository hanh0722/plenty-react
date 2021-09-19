import React from "react";
import { Button } from "@material-ui/core";
import styles from "../LoginForm/Form.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faMobileAlt,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import checkValidPassword from "../CheckValidPassword/CheckValidPassword";
import Input from "../Input/Input";
import { SIGN_IN_PAGE } from "../../link/link";
const RegisterForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.form}`}
      autoComplete="off"
    >
      <Input
        functionCondition={(valueName) => valueName.trim().length > 0}
        input={{
          type: "text",
          placeholder: "Type your name...",
          id: "name",
          required: true,
          autoComplete: "off",
          thumbcontent: "Enter your name",
        }}
        label="Name"
        error="Name is empty!"
      >
        <FontAwesomeIcon icon={faSignature} />
      </Input>
      <Input
        functionCondition={(valueEmail) =>
          valueEmail.trim().length > 0 && valueEmail.includes("@")
        }
        input={{
          type: "email",
          placeholder: "Type your email...",
          id: "email",
          required: true,
          autoComplete: "off",
          thumbcontent: "Enter your valid email",
        }}
        label="Email"
        error="Email is not valid!"
      >
        <FontAwesomeIcon icon={faLock} />
      </Input>
      <Input
        functionCondition={(valuePassword) => checkValidPassword(valuePassword)}
        label="Password"
        error="Password needs at least 8 characters long, one uppercase, one lowercase and one special character!"
        input={{
          type: "password",
          placeholder: "Type your password...",
          id: "password",
          required: true,
          autoComplete: "off",
          thumbcontent:
            "At least 8 characters long, one uppercase, lowercase and special character",
        }}
      >
        <FontAwesomeIcon icon={faUser} />
      </Input>
      <Input
        functionCondition={(valuePhone) => valuePhone.trim().length >= 10}
        label="Mobile Phone"
        error="Mobile phone needs at least 10 numbers"
        input={{
          type: "text",
          placeholder: "Type your mobile phone...",
          id: "phone",
          required: true,
          autoComplete: "off",
          minLength: 10,
          maxLength: 11,
          thumbcontent: "Mobile phone needs at least 10 numbers",
        }}
      >
        <FontAwesomeIcon icon={faMobileAlt} />
      </Input>
      <div className={styles.button}>
        <Button className="w-100" variant="contained" type="submit">
          Register
        </Button>
      </div>
      <Link className="pt-3 text-center" to={SIGN_IN_PAGE}>
        Have an account? Sign in
      </Link>
    </form>
  );
};

export default RegisterForm;
