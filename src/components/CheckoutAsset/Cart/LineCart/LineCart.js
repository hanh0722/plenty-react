import React from "react";
import styles from "./LineCart.module.scss";
import p1 from "../../../image/indoor-3.jpeg";
const LineCart = () => {
  return (
    <div className={styles["item--cart"]}>
      <div className="d-flex align-items-center">
        <div className={styles.image}>
          <img src={p1} alt="" />
          <div
            className={`${styles.quantity} d-flex justify-content-center align-items-center`}
          >
            5
          </div>
        </div>
        <div className={styles.infor}>
          <p>Ficus</p>
          <p>Grant Planter / Brown</p>
        </div>
      </div>
      <p className={styles.price}>$40.00</p>
    </div>
  );
};

export default LineCart;
