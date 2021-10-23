import React from "react";
import styles from "./Item.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart";
import useCart from "../../../hook/use-cart";

const Item = ({ imageUrl, name, price, quantity, id, type }) => {
  const dispatch = useDispatch();
  const dataItem = {
    imageUrl,
    name,
    price,
    quantity,
    type,
    id,
  };
  const { removeItemFromCart } = useCart();
  return (
    <>
      <div
        className={`${styles.item} d-flex justify-content-between align-items-center`}
      >
        <div className={styles["image__product"]}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles["product__content"]}>
          <Link to="/">{name}</Link>
          <p className="fw-bold">Style: {type}</p>
          <p>${price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className={`${styles["quantity__btn"]} d-flex align-items-center`}
            >
              <div
                onClick={() =>
                  dispatch(CartActions.decreseItemHandler(dataItem))
                }
              >
                -
              </div>
              <input
                type="number"
                min="1"
                max="100"
                value={quantity}
                readOnly
              />
              <div
                onClick={() =>
                  dispatch(CartActions.increseItemHandler(dataItem))
                }
              >
                +
              </div>
            </div>
            <div
              onClick={() => removeItemFromCart(id)}
              className={`${styles.trash} d-flex justify-content-center align-items-center`}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
