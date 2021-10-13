import React, { useRef, useContext } from "react";
import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { DASHBOARD_MATERIAL } from "../../link/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../image/logo.png";
import logoDark from "../../../image/logo-dark.png";
import useToggle from "../../../hook/use-toggle";
import { DarkModeContext } from "../../darkmode-context/darkmode-content";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import User from "../User/User";
import ReactDOM from "react-dom";
import Overlay from "../../overlay/Overlay";
import Transition from "../../Transition/Transition";
import { DASHBOARD } from "../../link/link";
const SideBar = () => {
  const rippleRef = useRef();
  const { dark } = useContext(DarkModeContext);
  const { toggle, changeToggleHandler } = useToggle(false);
  const { toggle: toggleNavigation, changeToggleHandler: setToggleHandler } =
    useToggle(false);

  const onRippleStart = (event) => {
    rippleRef.current.start(event);
  };
  const onRippleFinish = (event) => {
    rippleRef.current.stop(event);
  };
  const renderListPath = (array) => {
    const mapPath = array.map((item) => {
      return (
        <NavLink activeClassName={styles.active} to={`${DASHBOARD}${item.path}`} key={item.name}>
          <li className={`${styles['list--item']} d-flex align-items-center`} key={item.path}>
              <span className={styles.icon}><FontAwesomeIcon icon={item.icon}/></span>
              <div className={styles.name}><span>{item.name}</span></div>
          </li>
        </NavLink>
      );
    });
    return mapPath;
  };
  return (
    <>
      <div
        className={`${styles["side--bar"]} ${
          toggle && styles["close--sidebar"]
        } ${toggleNavigation && styles["change--sidebar"]}`}
      >
        <div
          className={`${styles["intro--box"]} d-flex justify-content-between align-items-center`}
        >
          <div className={styles.logo}>
            <img src={dark ? logoDark : logo} alt="" />
          </div>
          <div
            onClick={changeToggleHandler}
            onMouseDown={onRippleStart}
            onMouseUp={onRippleFinish}
            className={styles["btn--open"]}
          >
            <span></span>
            <TouchRipple ref={rippleRef} center={false} />
          </div>
        </div>
        <User toggle={toggle} />
        <div className={styles.list}>
          <ul>
            <li>General</li>
            {renderListPath(DASHBOARD_MATERIAL.GENERAL)}
          </ul>
          <ul>
            <li>E-Commerce</li>
            {renderListPath(DASHBOARD_MATERIAL.ECOMMERCE)}
          </ul>
          <ul>
            <li>Admin</li>
            {renderListPath(DASHBOARD_MATERIAL.ADMIN)}
          </ul>
        </div>
      </div>
      <div onClick={setToggleHandler} className={styles.options}>
        <FontAwesomeIcon icon={faSlidersH} />
      </div>
      <Transition
        options={{
          in: toggleNavigation,
          mountOnEnter: true,
          unmountOnExit: true,
          timeout: 750,
        }}
      >
        <>
          {ReactDOM.createPortal(
            <Overlay onClick={setToggleHandler} style={{ zIndex: "20" }} />,
            document.getElementById("bg__ol")
          )}
        </>
      </Transition>
    </>
  );
};

export default SideBar;
