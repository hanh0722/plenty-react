import React from "react";
import Header from "../SignInAsset/RegisterForm/Header/Header";
import RegisterForm from "../SignInAsset/RegisterForm/RegisterForm";
import useFetch from "../hook/use-fetch";
import { registerUrl } from "../../config/url";
const Register = () => {
  const {
    isLoading,
    data,
    error,
    status,
    getDataFromServerHandler: sendDataToServer,
  } = useFetch();
  const registerHandler = (userData) => {
    sendDataToServer({
      url: registerUrl,
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      },
      message: "User is already existed!",
    });
  };
  console.log(isLoading, data, error, status);
  return (
    <>
      <Header />
      <RegisterForm onRegister={registerHandler} />
    </>
  );
};

export default Register;
