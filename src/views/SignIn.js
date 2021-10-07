import React from "react";
import { useRouteMatch } from "react-router-dom";
import LoginForm from "../components/SignInAsset/LoginForm/LoginForm";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import useFetch from "../hook/use-fetch";
import checkValidPassword from "../components/SignInAsset/CheckValidPassword/CheckValidPassword";
import { loginUrl } from "../config/url";
const SignIn = () => {
  const route = useRouteMatch();
  const {
    getDataFromServerHandler,
    data: dataSignIn,
    error,
    isLoading,
  } = useFetch();
  const getUserFromInput = (userData) => {
    console.log(userData);
    if (
      !userData.email.includes("@") ||
      !checkValidPassword(userData.password)
    ) {
      return;
    }
    getDataFromServerHandler({
      url: loginUrl,
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      }
    });
  };
  console.log(dataSignIn, error, isLoading);
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
      <LoginForm getUserData={getUserFromInput} />
    </>
  );
};

export default SignIn;
