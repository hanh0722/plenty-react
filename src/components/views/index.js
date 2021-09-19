import React from "react";
import Contact from "../Contact/Contact";
import Landing from "../Landing/Landing";
import ListTree from "../ListTree/ListTree";
import Main from "../Main/Main";
import Package from "../Package/Package";
import PageItems from "../PageItems/PageItems";
import Service from "../Service/Service";
import ViewShortItem from "../ViewShortItem/ViewShortItem";
const Index = () => {
  return (
    <>
      <ViewShortItem/>
      <Main />
      <Landing />
      <ListTree />
      <Package />
      <PageItems />
      <Service />
      <Contact/>
    </>
  );
};

export default Index;
