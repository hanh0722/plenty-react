import React from "react";
import styles from "./ToggleButton.module.scss";
import Ripple from "../Ripple/Ripple";
const ToggleButton = ({ isClicked, onClicked }) => {
  return (
    <div
      className={`${styles["tg-container"]} ${isClicked && styles["clicked"]}`}
    >
      <Ripple>
        <span onClick={onClicked} />
      </Ripple>
    </div>
  );
};

export default ToggleButton;
