import React from "react";
import styles from "./Slide.module.scss";
import { Link } from "react-router-dom";
import { faStar, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Slide = ({ imageUrl, name, price, type }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <img src={imageUrl} alt="" />
        <div className={styles["options-image"]}>
          <p>
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p>
            <FontAwesomeIcon icon={faEye} />
          </p>
        </div>
      </div>
      <div className={`${styles.content} text-center`}>
        <Link to="/">{name}</Link>
        <p className={styles.type}>Type: {type}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Slide;
