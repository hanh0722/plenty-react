import React from "react";
import Editor from "../Product/Editor/Editor";
import Input from "../../SignInAsset/Input/Input";
import styles from "../../SignInAsset/LoginForm/Form.module.scss";
import classes from "./Blog.module.scss";
const Blog = () => {
  return (
    <form className={`${styles.form} ${classes.container}`}>
      <Editor />
    </form>
  );
};

export default Blog;
