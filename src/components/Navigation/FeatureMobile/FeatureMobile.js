import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navigation.module.scss";
import { Button } from "@material-ui/core";
import DarkModeBtn from "../../DarkModeBtn/DarkModeBtn";
import { SIGN_IN_PAGE } from "../../link/link";
const FeatureMobile = () => {
  return (
    <>
      <div className={styles["signin__btn"]}>
        <Link to={SIGN_IN_PAGE}>
          <Button className="mt-3 mb-3" variant="contained">
            Log in
          </Button>
        </Link>
        <Button className={styles.register} variant="outlined">
          Register
        </Button>
      </div>
      <DarkModeBtn className={styles["btn__mb"]} />
    </>
  );
};

export default FeatureMobile;
