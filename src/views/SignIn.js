import React, { useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import LoginForm from "../components/SignInAsset/LoginForm/LoginForm";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import useFetch from "../hook/use-fetch";
import checkValidPassword from "../components/SignInAsset/CheckValidPassword/CheckValidPassword";
import { loginUrl } from "../config/url";
import { HOME_PAGE } from "../components/link/link";
const SignIn = () => {
  const history = useHistory();
  const route = useRouteMatch();
  const {
    getDataFromServerHandler,
    data: dataSignIn,
    error,
    isLoading,
    status,
    resetAllHandler,
  } = useFetch();
  // console.log(dataSignIn, error, isLoading, status);
  const getUserFromInput = (userData) => {
    if (
      !userData.email.includes("@") ||
      !checkValidPassword(userData.password)
    ) {
      return;
    }
    resetAllHandler();
    getDataFromServerHandler({
      url: loginUrl,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      },
    });
  };
  useEffect(() => {
    if (!dataSignIn || error || isLoading) {
      return;
    }
    if (!isLoading && dataSignIn && !error) {
      const { token, expiry } = dataSignIn;
      localStorage.setItem("token/customer", token);
      localStorage.setItem("expiry/customer", expiry);
      history.push(HOME_PAGE);
    }
  }, [dataSignIn, error, isLoading, history]);
  return (
    <>
      <HeaderPage
        title="Login"
        paths={[
          {
            link: route.path,
            name: "Sign In",
          },
        ]}
      />
      <LoginForm
        errorLogin={error}
        isLoading={isLoading}
        getUserData={getUserFromInput}
        status={status}
      />
    </>
  );
};

export default SignIn;
