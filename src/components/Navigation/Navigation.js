import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../image/logo.png";
import Hamburger from "../hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "../store/hamburgerSlice";
import ReactDOM from "react-dom";
import Overlay from "../overlay/Overlay";
import LayoutList from "../layout/LayoutList";
import Thumb from "../Thumb/Thumb";
import { Button } from "@material-ui/core";
const dataToolTip = ["Search", "Account", "WishList", "Cart"];
const Icon = ["fa-search", 'fa-user', "fa-star",  "fa-shopping-cart"];
const nestedPath = [
  {
    path: "indoor",
    name: "Indoor Plans",
  },
  { path: "outdoor", name: "Outdoor Plans" },
  { path: "herbs-veggies", name: "Herb + Veggies" },
];
const Navigation = ({ isDowned }) => {
  const [showedUp, setShowedUp] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(hamburgerActions.setClickedHandler());
  };
  const state = useSelector((state) => state.hamburger.isClicked);

  const setShowedUpHandler = () => {
    setShowedUp((prevState) => {
      return (prevState = !prevState);
    });
  };

  return (
    <>
      <nav className={`${isDowned && styles["nav__top"]} ${styles.nav}`}>
        <ul>
          <Hamburger onClick={clickHandler} isClicked={state} />
          <div className={styles.logo}>
            <NavLink activeClassName={styles.active} to="/">
              <li>
                <img src={logo} alt="logo" />
              </li>
            </NavLink>
          </div>
          <header className={`${styles.items} ${state && styles.back}`}>
            <div
              className={`${styles.child} d-flex justify-content-center align-items-center`}
            >
              <NavLink to="/" activeClassName={styles.active} exact>
                <li>Home</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
            </div>
            <div
              className={`${styles.child} d-flex justify-content-center align-items-center`}
            >
              <NavLink to="/shop" activeClassName={styles.active}>
                <li>Shop</li>
                <FontAwesomeIcon icon={faAngleDown} />
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
                      <NavLink to={`/products/${items.path}`} key={items.name}>
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
              <NavLink to="/blogs" activeClassName={styles.active}>
                <li>Blogs</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
            </div>
            <div className={styles["signin__btn"]}>
              <Button className='mt-3 mb-3' variant="contained">Log in</Button>
              <Button variant="outlined">Register</Button>
            </div>
          </header>
          <div className={styles.icons}>
            {Icon.map((items, index) => {
              if (index === 0) {
                return (
                  <li
                    onClick={() => dispatch(hamburgerActions.searchSlide())}
                    key={index}
                  >
                    <i className={`fal ${items}`}></i>
                    <Thumb className={styles.tooltip}>Search</Thumb>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <i className={`fal ${items}`}></i>
                  <Thumb className={styles.tooltip}>{dataToolTip[index]}</Thumb>
                </li>
              );
            })}
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
