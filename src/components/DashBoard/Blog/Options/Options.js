import React from "react";
import styles from "../../../SignInAsset/LoginForm/Form.module.scss";
import Input from "../../../SignInAsset/Input/Input";
import ToggleButton from "../../../UI/ToggleButton/ToggleButton";
import useToggle from "../../../../hook/use-toggle";
import classes from "./Options.module.scss";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
const Options = ({setIsPublic, setCategory, category, isSubmit, editorIsLoading}) => {
  const { toggle, changeToggleHandler } = useToggle(true);
  
  const changePublicOfPost = () => {
    setIsPublic(!toggle);
    changeToggleHandler();
  }
  return (
    <>
      <div className={styles.form}>
        <div
          className={`d-flex justify-content-between align-items-center ${classes.line}`}
        >
          <span onClick={changeToggleHandler}>Publish</span>
          <ToggleButton isClicked={toggle} onClicked={changePublicOfPost} />
        </div>
        <div className={`${classes.line}`}>
          <Input
            functionCondition={(value) => value.trim().length >= 0}
            input={{
              type: "text",
              placeholder: "Category of blog",
              autoComplete: "off",
              id: 'Category',
              value: category,
              onChange: event => setCategory(event.target.value)
            }}
            label="Category"
          >
            <FontAwesomeIcon icon={faClipboard} />
          </Input>
        </div>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <Button
          variant="outlined"
          className={`${classes.btn} ${classes["btn-preview"]}`}
        >
          Preview
        </Button>
        <Button
          disabled={editorIsLoading}
          onClick={isSubmit}
          variant="contained"
          className={`${classes.btn} ${classes.button} ${editorIsLoading && classes.disabled}`}
        >
          Post
        </Button>
      </div>
    </>
  );
};

export default Options;
