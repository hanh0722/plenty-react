import React from "react";
import styles from "../../../SignInAsset/LoginForm/Form.module.scss";
import ToggleButton from "../../../UI/ToggleButton/ToggleButton";
import useToggle from "../../../../hook/use-toggle";
import classes from "./Options.module.scss";
import { Button } from "@material-ui/core";
const Options = () => {
  const { toggle, changeToggleHandler } = useToggle(true);
  return (
    <>
      <div className={styles.form}>
        <div
          className={`d-flex justify-content-between align-items-center ${classes.line}`}
        >
          <span onClick={changeToggleHandler}>Publish</span>
          <ToggleButton isClicked={toggle} onClicked={changeToggleHandler} />
        </div>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <Button variant='outlined' className={`${classes.btn} ${classes['btn-preview']}`}>Preview</Button>
        <Button variant='contained' className={`${classes.btn} ${classes.button}`}>Post</Button>
      </div>
    </>
  );
};

export default Options;
