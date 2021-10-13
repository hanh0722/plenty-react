import React from "react";
import styles from "./User.module.scss";
import imageDefault from "../../../image/default-user.jpg";
import { Link } from "react-router-dom";
import { DASHBOARD_MATERIAL } from "../../link/link";
const User = ({toggle}) => {
  return (
    <div className={`${styles.user} d-flex align-items-center ${toggle && `${styles.back}`}`}>
      <div className={styles.image}>
        <img src={imageDefault} alt="" />
      </div>
      <div className={styles.flow}>
        <div className={styles.content}>
            <Link to={DASHBOARD_MATERIAL.CHANGE_VALUE_USER}>Admin</Link>
            <p>Admin</p>
        </div>
      </div>
    </div>
  );
};

export default User;
