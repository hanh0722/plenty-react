import React from "react";
import Container from "../../components/DashBoard/layout/Container";
import Navigation from "../../components/DashBoard/UserInformation/Navigation";
import FormUploadUser from "../../components/DashBoard/UserInformation/FormUploadUser/FormUploadUser";
const UserInformation = () => {
  return (
    <Container>
      <Navigation />
      <FormUploadUser/>
    </Container>
  );
};

export default UserInformation;
