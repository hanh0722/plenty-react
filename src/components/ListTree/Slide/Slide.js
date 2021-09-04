import React from "react";
import styles from "./Slide.module.scss";
import { Link } from "react-router-dom";
import { faStar, faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { ProductActions } from "../../store/Product";
const Slide = ({ imageUrl, name, price, type, id }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    // will only send id when using BE
    dispatch(CartActions.addToCartHandler({
      imageUrl,
      name,
      price,
      type,
      id
    }))
    dispatch(CartActions.showCartHandler())
  }
  const setIdAndOpenModal = (id) => {
    dispatch(ProductActions.setIdProduct(id))
    dispatch(ProductActions.setShowModalHandler());
  }
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Link to='/'><img src={imageUrl} alt="" /></Link>
        <div className={styles["options-image"]}>
          <p>
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p onClick={() => setIdAndOpenModal(id)} className={styles.watch}>
            <FontAwesomeIcon icon={faEye} />
          </p>
          <p>
            <FontAwesomeIcon
              onClick={addToCartHandler}
              icon={faCartPlus}
            />
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
