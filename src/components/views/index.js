import React from "react";
import Landing from "../Landing/Landing";
// import ListTree from "../ListTree/ListTree";
import Main from "../Main/Main";
import Package from "../Package/Package";
import PageItems from "../PageItems/PageItems";
import Service from "../Service/Service";
const Index = () => {
  return (
    <>
      <Main />
      <Landing/>
      {/* <ListTree/> */}
      <Package/>
      <PageItems/>
      <Service/>
    </>
  );
};

export default Index;
