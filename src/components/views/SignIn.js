import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { Link, useRouteMatch } from "react-router-dom";
import { HOME_PAGE } from "../link/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "../SignInAsset/LoginForm/LoginForm";
const SignIn = () => {
  const route = useRouteMatch();
  return (
    <>
      <BreadCrumb>
        <h2>Log In</h2>
        <Link to={HOME_PAGE}>
          Home <FontAwesomeIcon icon={faAngleRight} />{" "}
        </Link>
        <Link to={route.path}>Sign In</Link>
      </BreadCrumb>
      <LoginForm/>
    </>
  );
};

export default SignIn;
