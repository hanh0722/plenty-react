import React from "react";
import { SIGN_IN_PAGE } from "../components/link/link";
import { useRouteMatch } from "react-router-dom";
import ForgetPassword from "../components/SignInAsset/ForgetPassword/ForgetPassword";
import HeaderPage from "../components/HeaderPage/HeaderPage";
const Reset = () => {
  const route = useRouteMatch();
  return (
    <>
      <HeaderPage title="Reset Password" paths={[
        {
          link: SIGN_IN_PAGE,
          name: 'Sign in'
        },
        {
          link: route.path,
          name: "Register"
        }
      ]} />
      <ForgetPassword />
    </>
  );
};

export default Reset;
