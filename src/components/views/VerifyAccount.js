import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import HeaderPage from "../HeaderPage/HeaderPage";
import Verify from "../Verify/Verify";
import useFetch from "../hook/use-fetch";
import { urlCheckVerify } from "../../config/url";
const VerifyAccount = () => {
  const [errorOTP, setErrorOTP] = useState(null);
  const { getDataFromServerHandler, data, error, isLoading } = useFetch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');
  const id = params.get('id');
  const verifyHandler = (data) => {
    setErrorOTP(null);
    if (data.length < 4) {
      return setErrorOTP(true);
    }
    const setOTP = +data;
    getDataFromServerHandler({
      url: urlCheckVerify(id, token),
      options: {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          OTP: setOTP
        })
      }
    });
  };
  return (
    <>
      <HeaderPage
        paths={[
          {
            link: location.pathname,
            name: "Verify Account",
          },
        ]}
        title="Verify Account"
      />
      <Verify verifyOTP={verifyHandler} errorOTP={errorOTP} />
    </>
  );
};

export default VerifyAccount;
