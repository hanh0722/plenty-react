import React, { useEffect, useMemo } from "react";
import HeaderPage from "../components/HeaderPage/HeaderPage";
import { useLocation, Redirect } from "react-router-dom";
import ResetPasswordUser from "../components/ResetPasswordUser/ResetPasswordUser";
import { checkResetPasswordUrl } from "../config/url";
import { NOT_FOUND } from "../components/link/link";
import useFetch from "../hook/use-fetch";
import LoadingTime from "../components/ResetPasswordUser/LoadingTime/LoadingTime";
const ResetPassword = (props) => {
  const { getDataFromServerHandler, error, data, isLoading } =
    useFetch();
  const location = useLocation();
  const uidToken = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("uidt");
  }, [location.search]);
  useEffect(() => {
    if (!uidToken) {
      return;
    }
    getDataFromServerHandler({
      url: checkResetPasswordUrl(uidToken),
    });
  }, [uidToken, getDataFromServerHandler]);
  return (
    <>
      {!uidToken && <Redirect to={NOT_FOUND} />}
      <HeaderPage
        title="Reset Password"
        paths={[
          {
            name: "Reset Password",
            link: `${location.pathname}${location.search}`,
          },
        ]}
      />
      {isLoading && <LoadingTime/>}
      {!isLoading && data && !error && <ResetPasswordUser token={uidToken} _id={data.userId}/>}
    </>
  );
};

export default ResetPassword;
