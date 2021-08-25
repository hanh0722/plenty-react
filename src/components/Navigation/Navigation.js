import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../image/logo.png";
import { faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import Hamburger from "../hamburger/Hamburger";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerActions } from "../store/hamburgerSlice";
import ReactDOM from "react-dom";
import Overlay from "../overlay/Overlay";
import LayoutList from "../layout/LayoutList";
const icons = [faSearch, faUser, faStar, faShoppingBasket];
const nestedPath = [
  {
    path: "indoor",
    name: "Indoor Plans",
  },
  { path: "outdoor", name: "Outdoor Plans" },
  { path: "herbs-veggies", name: "Herb + Veggies" },
];
const Navigation = () => {
    const [showedUp, setShowedUp] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(hamburgerActions.setClickedHandler());
  };
  const state = useSelector((state) => state.hamburger.isClicked);
  const setShowedUpHandler = () =>{
      setShowedUp(true);
  }
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <Hamburger onClick={clickHandler} isClicked={state} />
          <div className={styles.logo}>
            <NavLink activeClassName={styles.active} to="/">
              <li>
                <img src={logo} alt="logo" />
              </li>
            </NavLink>
          </div>
          <div className={`${styles.items} ${state && styles.back}`}>
            <div className={styles.child}>
              <NavLink to="/" activeClassName={styles.active} exact>
                <li>Home</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
            </div>
            <div className={`${styles.child}`}>
              <NavLink to="/shop" activeClassName={styles.active}>
                <li>Shop</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
            </div>
            <div className={`${styles.child} ${styles.row}`}>
              <NavLink
                onClick={setShowedUpHandler}
                className={styles.row}
                to="/products"
                activeClassName={styles.active}
                exact
              >
                <li>Products</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
              <LayoutList isClicked={showedUp}>
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
            <div className={styles.child}>
              <NavLink to="/blogs" activeClassName={styles.active}>
                <li>Blogs</li>
                <FontAwesomeIcon icon={faAngleDown} />
              </NavLink>
            </div>
          </div>
          <div className={styles.icons}>
            {icons.map((items, index) => {
              return (
                <li key={index}>
                  <FontAwesomeIcon icon={items} />
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
