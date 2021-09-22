import React from "react";
import { SIGN_IN_PAGE } from "../link/link";
import { useRouteMatch } from "react-router-dom";
import ForgetPassword from "../SignInAsset/ForgetPassword/ForgetPassword";
import HeaderPage from "../HeaderPage/HeaderPage";
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
