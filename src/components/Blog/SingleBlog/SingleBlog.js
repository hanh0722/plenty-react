import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleBlog.module.scss";
import { Button } from "@material-ui/core";
const SingleBlog = ({imageUrl, type, title, description}) => {
  return (
    <div className={styles["block--blog"]}>
      <div className={styles["image--container"]}>
        <div className={styles.image}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <div className={styles["block--content"]}>
        <p className={styles.type}>{type}</p>
        <Link to="/">
          {title}
        </Link>
        <p className={styles.intro}>
          {description}
        </p>
        <Button variant='outlined' className={`${styles.btn}`}>Read More</Button>
      </div>
    </div>
  );
};

export default SingleBlog;
