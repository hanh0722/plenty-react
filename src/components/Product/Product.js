import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styles from "./Product.module.scss";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart";
const Product = (props) => {
  const route = useRouteMatch();
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      CartActions.addToCartHandler({
        id: props.id,
        imageUrl: props.imageUrl,
        name: props.name,
        price: props.price,
      })
    );
    dispatch(CartActions.showCartHandler());
  };
  return (
    <div className={styles.container} style={props.style}>
      <div className={`${styles.col}`}>
        <img src={props.imageUrl} alt="ImageItem" />
        <div className={styles.overlay}>
          <div
            className={`${styles.icon} d-flex justify-content-center align-items-center`}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className={styles.btn}>
            <Button onClick={addCartHandler} variant="contained">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <Link to={`${route.path}/${props.link}`}>{props.name}</Link>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default Product;
