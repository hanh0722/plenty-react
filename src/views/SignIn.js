import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouteMatch, useHistory, Redirect } from "react-router-dom";
import LoginForm from "../components/SignInAsset/LoginForm/LoginForm";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import useFetch from "../hook/use-fetch";
import checkValidPassword from "../components/SignInAsset/CheckValidPassword/CheckValidPassword";
import { loginUrl } from "../config/url";
import { HOME_PAGE } from "../components/link/link";
import { useDispatch } from "react-redux";
import { NotifyActions } from "../components/store/NotifyAfterLogin/NotifyAfterLogin";
import { DASHBOARD, DASHBOARD_MATERIAL } from "../components/link/link";
import { isAuthActions } from "../components/store/IsAuth/is-auth";
const SignIn = () => {
  const { isLoggedIn } = useSelector((state) => state.isAuth);
  const dispatch = useDispatch();
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
      dispatch(
        NotifyActions.showedNotify({
          message: "Success",
          code: 200,
        })
      );
      dispatch(isAuthActions.setIsAuthenticated(token));
    }
  }, [dataSignIn, error, isLoading, history, status, dispatch]);
  return (
    <>
      {isLoggedIn && (
        <Redirect to={`${DASHBOARD}${DASHBOARD_MATERIAL.GENERAL[0].path}`} />
      )}
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
