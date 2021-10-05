import React from "react";
import styles from "./LinkCheckOut.module.scss";
import { Button } from "@material-ui/core";
import useQuantity from "../../../hook/use-quantity";
const LinkCheckOut = ({ url }) => {
  const { incrementHandler, decrementHandler, quantity, setQuantity } =
    useQuantity();
  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.link} d-flex justify-content-between align-items-center w-100`}
        >
          <div className={`${styles.image} d-flex align-items-center`}>
            <img src={url} alt="" />
            <div className="ms-3">
              <p>Book</p>
              <p>$22.00</p>
            </div>
          </div>
          <div className={`${styles.addToCart} w-70 d-flex`}>
            <div className={`d-flex align-items-center ${styles.quantity}`}>
              <div
                onClick={decrementHandler}
                className="d-flex justify-content-center align-items-center"
              >
                -
              </div>
              <input
                onChange={(e) => setQuantity(+e.target.value)}
                className="text-center"
                value={quantity}
                type="number"
                min="1"
                max="100"
              />
              <div
                onClick={incrementHandler}
                className="d-flex justify-content-center align-items-center"
              >
                +
              </div>
            </div>
            <div className={styles.add}>
              <Button variant="outlined">Add To Cart</Button>
              <Button variant="contained">Buy It Now</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkCheckOut;
