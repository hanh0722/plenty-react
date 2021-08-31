import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Index from "./components/views";
import "./components/styles/styles.scss";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import { buttonTopActions } from "./components/store/button-top";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
const App = () => {
  const [navigation, setNavigation] = useState(false);
  const state = useSelector((state) => state.hamburger.isShowed);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      offset: 250,
      delay: 600
    })
    let oldValue = 0;
    let newValue = 0;
    const getScrollHandler = () => {
      newValue = window.pageYOffset;
      if (newValue > 50) {
        dispatch(buttonTopActions.setVisibleHandler());
      } else {
        dispatch(buttonTopActions.setHiddenHandler());
      }
      if (oldValue < newValue) {
        setNavigation(true);
      } else {
        setNavigation(false);
      }
      oldValue = newValue;
    };
    window.addEventListener("scroll", getScrollHandler);
  }, [dispatch]);
  const upToTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navigation isDowned={navigation} />
      <SearchBar isShowed={state} />
      <ButtonTop onClick={upToTopHandler} />
      <Switch>
        <Route path="/" exact component={Index} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
