import React, { useCallback, useEffect, useState } from "react";
import { timeOutSignIn } from "./components/helper/logoutAuto";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Index from "./views/index";
import CartMain from "./components/CartMain/CartMain";
import "./components/styles/styles.scss";
import ButtonTop from "./components/ButtonTop/ButtonTop";
import { buttonTopActions } from "./components/store/button-top";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Shop from "./views/shop";
import {
  BLOG_PAGE,
  CHECK_OUT_PAGE,
  DETAIL,
  HOME_PAGE,
  NOT_FOUND,
  PAGE_SUCCESS_REGISTER,
  PAGE_VERIFY_FIRST,
  PRODUCT_LIST,
  REGISTER_PAGE,
  RESET_PASSWORD,
  SHOP,
  SIGN_IN_PAGE,
  VERIFY_ACCOUNT,
} from "./components/link/link";
import DetailItem from "./views/DetailItem";
import SignIn from "./views/SignIn";
import LayoutTop from "./components/layout/LayoutTop/LayoutTop";
import Blog from "./views/Blog";
import Register from "./views/Register";
import Reset from "./views/Reset";
import Checkout from "./views/Checkout";
import TypeProduct from "./views/TypeProduct";
import NotFound from "./views/NotFound";
import VerifyAccount from "./views/VerifyAccount";
import RegisterOTP from "./views/RegisterOTP";
import SuccessVerified from "./views/SuccessVerified";
// import Test from "./components/Test/Test";
const App = () => {
  const [navigation, setNavigation] = useState(false);
  const location = useLocation();
  const state = useSelector((state) => state.hamburger.isShowed);
  const dispatch = useDispatch();
  const getScrollHandler = useCallback(() => {
    let newValue;
    let oldValue;
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
  }, [dispatch]);
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1200,
      offset: 250,
      delay: 600,
    });
    window.addEventListener("scroll", getScrollHandler);
    timeOutSignIn();
  }, [dispatch, getScrollHandler]);
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
          <Route path={REGISTER_PAGE} component={Register} exact />
          <Route path={PAGE_VERIFY_FIRST} component={RegisterOTP} />
          <Route path={VERIFY_ACCOUNT} component={VerifyAccount} />
          <Route path={PAGE_SUCCESS_REGISTER} component={SuccessVerified} />
          <Route path={CHECK_OUT_PAGE} component={Checkout} />
          {/* <Route path="/test" component={Test} /> */}
          <Route path={NOT_FOUND} component={NotFound} />
          <Redirect from="*" to={NOT_FOUND} />
        </Switch>
        <Footer />
      </LayoutTop>
    </>
  );
};

export default App;
