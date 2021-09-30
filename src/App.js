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
import {
  BLOG_PAGE,
  CHECK_OUT_PAGE,
  DETAIL,
  HOME_PAGE,
  PRODUCT_LIST,
  REGISTER_PAGE,
  RESET_PASSWORD,
  SHOP,
  SIGN_IN_PAGE,
  VERIFY_ACCOUNT,
} from "./components/link/link";
import DetailItem from "./components/views/DetailItem";
import SignIn from "./components/views/SignIn";
import LayoutTop from "./components/layout/LayoutTop/LayoutTop";
import Blog from "./components/views/Blog";
import Register from "./components/views/Register";
import Reset from "./components/views/Reset";
import Checkout from "./components/views/Checkout";
import TypeProduct from "./components/views/TypeProduct";
import NotFound from "./components/views/NotFound";
import VerifyAccount from "./components/views/VerifyAccount";
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
  }, [location.pathname]);
  const upToTopHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Navigation isDowned={navigation} />
      <SearchBar isShowed={state} />
      <ButtonTop onClick={upToTopHandler} />
      <CartMain />
      <LayoutTop>
        <Switch>
          <Route path={HOME_PAGE} exact component={Index} />
          <Route path={SHOP} component={Shop} exact />
          <Route path={DETAIL} component={DetailItem} />
          <Route path={SIGN_IN_PAGE} component={SignIn} exact />
          <Route path={PRODUCT_LIST} component={TypeProduct} />
          <Route path={RESET_PASSWORD} component={Reset} />
          <Route path={BLOG_PAGE} component={Blog} />
          <Route path={REGISTER_PAGE} component={Register} exact/>
          <Route path={VERIFY_ACCOUNT} component={VerifyAccount}/>
          <Route path={CHECK_OUT_PAGE} component={Checkout} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </LayoutTop>
    </>
  );
};

export default App;
