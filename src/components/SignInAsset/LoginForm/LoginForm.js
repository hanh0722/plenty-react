import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Form.module.scss";
import { Link, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import checkValidPassword from "../CheckValidPassword/CheckValidPassword";
import Input from "../Input/Input";
import { REGISTER_PAGE } from "../../link/link";
const icons = [faFacebookF, faGoogle, faTwitter];
const LoginForm = () => {
  const route = useRouteMatch();
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
      <Link to={`${route.path}/reset`}>Forget password?</Link>
      <div className={styles.button}>
        <Button className="w-100" variant="contained" type="submit">
          Sign In
        </Button>
      </div>
      <Link className="pt-3 text-center" to={REGISTER_PAGE}>
        Don't have account? Sign up
      </Link>
      <div className={styles.options}>
        <p>Or Sign Up Using</p>
        <div className="d-flex justify-content-center align-items-center pt-3">
          {icons.map((item, index) => {
            return (
              <span
                className="d-flex justify-content-center align-items-center"
                key={index}
              >
                <FontAwesomeIcon icon={item} />
              </span>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;