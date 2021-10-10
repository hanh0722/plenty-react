import React, { useContext } from "react";
import styles from "./Footer.module.scss";
import logo from "../../image/logo.png";
import logoDarkTheme from "../../image/logo-dark.png";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../darkmode-context/darkmode-content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const listAbout = ["about us", "contact us", "FAQs", "blog"];
const informationList = [
  "Register",
  "login",
  "my cart",
  "wishlist",
  "product compare",
];

const iconsSocial = [faFacebook, faTwitter, faInstagram];
const Footer = () => {
  const DarkModeCtx = useContext(DarkModeContext);
  return (
    <footer className={styles["layout-ft"]}>
      <div className={styles.footer}>
        <div className={styles["list__items"]}>
          <div className={styles.logo}>
            <img src={DarkModeCtx.dark ? logoDarkTheme : logo} alt="logo" />
          </div>
          <div className={styles["first__list"]}>
            <h4>Don't miss a thing</h4>
          </div>
        </div>
        <ul>
          <li className={styles["title__list"]}>About</li>
          {listAbout.map((item, index) => {
            return (
              <Link key={index} to="/">
                <li>{item}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li className={styles["title__list"]}>Information</li>
          {informationList.map((item, index) => {
            return (
              <Link key={index} to="/">
                <li>{item}</li>
              </Link>
            );
          })}
        </ul>
        <ul>
          <li className={styles["title__list"]}>Our Store</li>
          <div className="d-flex">
            {iconsSocial.map((item, index) => {
              return (
                <Link to="/" key={index}>
                  <li style={{ paddingRight: "15px" }}>
                    <FontAwesomeIcon icon={item} />
                  </li>
                </Link>
              );
            })}
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
