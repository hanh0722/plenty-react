import React from "react";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavData from "./NavData/NavData";
import { navigationActions } from "../../store/NavigationDash/navigation-dash";
import { useDispatch, useSelector } from "react-redux";
const Navigation = () => {
  const dispatch = useDispatch();
  const indexNavigation = useSelector((state) => state.nav.index);
  return (
    <nav className={styles.navigation}>
      <ul className={`d-flex align-items-center ${styles.nav}`}>
        {NavData.map((item, index) => {
          return (
            <li
              onClick={() =>
                dispatch(navigationActions.changeNavigation(index))
              }
              key={index}
              className={index === indexNavigation ? styles.active : ""}
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
