import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";
import styles from "./Form.module.scss";
import Input from "../../../SignInAsset/Input/Input";
import classes from "../../../SignInAsset/LoginForm/Form.module.scss";
import Editor from "../Editor/Editor";
import DropzoneUpload from "../../../DropzoneUpload/DropzoneUpload";
const Form = () => {
  const editorRef = useRef();
  const focusEditorHandler = () => {
    editorRef.current.focus();
  };
  return (
    <form className={`${classes.form} w-100 ${styles.container}`}>
      <Input
        functionCondition={(value) => value.trim().length > 0}
        input={{
          type: "text",
          autoComplete: "off",
          id: "Title",
          placeholder: "Add Title For Product",
        }}
        label="Title"
        error="Title must be filled"
      >
        <FontAwesomeIcon icon={faSignature} />
      </Input>
      <label onClick={focusEditorHandler}>Description</label>
      <Editor ref={editorRef} focusEditorHandler={focusEditorHandler} />
      <label className="pt-3">Upload Image</label>
      <DropzoneUpload />
    </form>
  );
};

export default Form;
