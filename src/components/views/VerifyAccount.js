import React from "react";
import { useLocation } from "react-router-dom";
import HeaderPage from "../HeaderPage/HeaderPage";
import Verify from "../Verify/Verify";
const VerifyAccount = () => {
  const location = useLocation();
  return (
    <>
      <HeaderPage
        paths={[
          {
            link: location.pathname,
            name: 'Verify Account'
          },
        ]}
        title="Verify Account"
      />
      <Verify/>
    </>
  );
};

export default VerifyAccount;
