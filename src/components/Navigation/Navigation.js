import React, { useState, useContext, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import logo from "../../image/logo.png";
import logoDarkTheme from "../../image/logo-dark.png";
import Hamburger from "../hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "../store/hamburgerSlice";
import ReactDOM from "react-dom";
import Overlay from "../overlay/Overlay";
import LayoutList from "../layout/LayoutList";
import Thumb from "../Thumb/Thumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import { DarkModeContext } from "../darkmode-context/darkmode-content";
import { CartActions } from "../store/cart";
import Breakpoints from "../Breakpoints/Breakpoints";
import FeatureMobile from "./FeatureMobile/FeatureMobile";
import { DASHBOARD_MATERIAL, DASHBOARD } from "../link/link";
const dataToolTip = ["Search", "Account", "WishList", "Cart"];
const Icon = [faSearch, faUser, faHeart, faShoppingCart];
const nestedPath = [
  {
    path: "indoor",
    name: "Indoor Plans",
  },
  { path: "outdoor", name: "Outdoor Plans" },
  { path: "herbs-veggies", name: "Herb + Veggies" },
];
const Navigation = ({ isDowned }) => {
  const DarkModeCtx = useContext(DarkModeContext);
  const [showedUp, setShowedUp] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(hamburgerActions.setClickedHandler());
  };
  const state = useSelector((state) => state.hamburger.isClicked);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const setShowedUpHandler = () => {
    setShowedUp((prevState) => {
      return (prevState = !prevState);
    });
  };
  const checkScreenIsValid = useMemo(() => {
    const widthScreen = window.innerWidth;
    if (widthScreen <= 991) {
      return true;
    }
    return false;
  }, []);
  return (
    <>
      <nav className={`${isDowned && styles["nav__top"]} ${styles.nav}`}>
        <ul>
          <Hamburger onClick={clickHandler} isClicked={state} />
          <div className={styles.logo}>
            <NavLink activeClassName={styles.active} to="/">
              <li>
                <img src={DarkModeCtx.dark ? logoDarkTheme : logo} alt="logo" />
              </li>
            </NavLink>
          </div>
          <header className={`${styles.items} ${state && styles.back}`}>
            <div
              className={`${styles.child} d-flex justify-content-center align-items-center`}
            >
              <NavLink
                onClick={checkScreenIsValid ? clickHandler : null}
                to="/"
                activeClassName={styles.active}
                exact
              >
                <li>Home</li>
              </NavLink>
            </div>
            <div
              className={`${styles.child} d-flex justify-content-center align-items-center`}
            >
              <NavLink
                onClick={checkScreenIsValid ? clickHandler : null}
                to="/shop"
                activeClassName={styles.active}
              >
                <li>Shop</li>
              </NavLink>
            </div>
            <div
              className={`${styles.child} ${styles.row} d-flex justify-content-center align-items-center`}
            >
              <p onClick={setShowedUpHandler} className={`${styles.row}`}>
                <li>Products</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </p>
              <LayoutList isClicked={showedUp} setBack={setShowedUpHandler}>
                <div className={styles["list__inside"]}>
                  {nestedPath.map((items) => {
                    return (
                      <NavLink
                        onClick={checkScreenIsValid ? clickHandler : null}
                        to={`/products/${items.path}`}
                        key={items.name}
                      >
                        {items.name}
                      </NavLink>
                    );
                  })}
                </div>
              </LayoutList>
            </div>
            <div
              className={`${styles.child} d-flex justify-content-center align-items-center`}
            >
              <NavLink
                onClick={checkScreenIsValid ? clickHandler : null}
                to="/blogs"
                activeClassName={styles.active}
              >
                <li>Blogs</li>
              </NavLink>
            </div>
            {checkScreenIsValid && <FeatureMobile />}
          </header>
          <div className={styles.icons}>
            {Icon.map((items, index) => {
              if (index === 0) {
                return (
                  <li
                    onClick={() => dispatch(hamburgerActions.searchSlide())}
                    key={index}
                  >
                    <FontAwesomeIcon icon={items} />
                    <Thumb className={styles.tooltip}>Search</Thumb>
                  </li>
                );
              }
              if (index === 2) {
                return (
                  <li key={index}>
                    <FontAwesomeIcon icon={items} />
                    <Thumb className={styles.tooltip}>
                      {dataToolTip[index]}
                    </Thumb>
                    {wishlist.length > 0 && (
                      <Breakpoints>
                        {wishlist.reduce((acc, item) => {
                          return acc + item.quantity;
                        }, 0)}
                      </Breakpoints>
                    )}
                  </li>
                );
              }
              if (index === 3) {
                return (
                  <li
                    onClick={() => dispatch(CartActions.showCartHandler())}
                    key={index}
                  >
                    <FontAwesomeIcon icon={items} />
                    <Thumb className={styles.tooltip}>
                      {dataToolTip[index]}
                    </Thumb>
                    {cart.length > 0 && (
                      <Breakpoints>
                        {cart.reduce((acc, item) => {
                          return acc + item.quantity;
                        }, 0)}
                      </Breakpoints>
                    )}
                  </li>
                );
              }
              return (
                <li key={index}>
                  <Link to={`${DASHBOARD}${DASHBOARD_MATERIAL.GENERAL[0].path}`}>
                    <FontAwesomeIcon icon={items} />
                  </Link>
                  <Thumb className={styles.tooltip}>{dataToolTip[index]}</Thumb>
                </li>
              );
            })}
            <DarkModeBtn className={styles["btn__main"]} />
          </div>
        </ul>
      </nav>
      {state &&
        ReactDOM.createPortal(
          <Overlay
            onClick={() => dispatch(hamburgerActions.setClickedHandler())}
          />,
          document.getElementById("bg__ol")
        )}
    </>
  );
};

export default Navigation;
