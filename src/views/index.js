import React from "react";
import Contact from "../components/Contact/Contact";
import Landing from "../components/Landing/Landing";
import ListTree from "../components/ListTree/ListTree";
import Main from "../components/Main/Main";
import Package from "../components/Package/Package";
import PageItems from "../components/PageItems/PageItems";
import Service from "../components/Service/Service";
import ViewShortItem from "../components/ViewShortItem/ViewShortItem";
import Transition from '../components/Transition/Transition';
import MessageSideBar from "../components/MessageSideBar/MessageSideBar";
const Index = () => {
  return (
    <>
      <MessageSideBar>
        Hello
      </MessageSideBar>
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
