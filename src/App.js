import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import Index from "./components/views";
import CartMain from "./components/CartMain/CartMain";
import "./components/styles/styles.scss";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import { buttonTopActions } from "./components/store/button-top";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Shop from "./components/views/shop";
import {DETAIL, HOME_PAGE, SHOP} from './components/link/link'
import DetailItem from "./components/views/DetailItem";
const App = () => {
  const [navigation, setNavigation] = useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.hamburger.isShowed);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      offset: 250,
      delay: 600,
    });
    let oldValue = 0;
    let newValue = 0;
    const getScrollHandler = () => {
      newValue = window.pageYOffset;
      if (newValue > 50) {
        dispatch(buttonTopActions.setVisibleHandler());
      } else {
        dispatch(buttonTopActions.setHiddenHandler());
      }
      if (oldValue < newValue && newValue > 50) {
        setNavigation(true);
      } else {
        setNavigation(false);
      }
      oldValue = newValue;
    };
    window.addEventListener("scroll", getScrollHandler);
  }, [dispatch]);
  useEffect(() => {
    upToTopHandler();
  }, [location.pathname])
  const upToTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navigation isDowned={navigation} />
      <SearchBar isShowed={state} />
      <ButtonTop onClick={upToTopHandler} />
      <CartMain />
      <Switch>
        <Route path={HOME_PAGE} exact component={Index} />
        <Route path={SHOP} component={Shop} exact/>
        <Route path={DETAIL} component={DetailItem}/>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
