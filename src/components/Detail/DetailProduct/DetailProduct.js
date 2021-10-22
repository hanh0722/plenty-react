import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Methods from "../Methods/Methods";
import Delivery from "../LayoutDelivery/Delivery";
import { CartActions } from "../../store/cart";
import useQuantity from "../../../hook/use-quantity";
import styles from "../../styles/DetailItem.module.scss";
import Skeleton from "../../UI/LoadingSkeleton/Skeleton";
import classes from "./DetailProduct.module.scss";

const DetailProduct = ({
  product,
  changeToggleHandler,
  setContent,
  isLoading,
}) => {
  const { incrementHandler, decrementHandler, quantity, setQuantity } =
    useQuantity(1);
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(CartActions.showCartHandler());
    dispatch(
      CartActions.addToCartHandler({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        quantity: quantity,
        price: product.price,
      })
    );
  };
  return (
    <Col xs={12} sm={12} md={6} lg={6} className={`${styles["col__content"]}`}>
      <div
        className={`${styles.title} d-flex justify-content-between align-items-center`}
      >
        <h4>
          {isLoading && <Skeleton times={1} />}
          {!isLoading && product && `${product.title}`}
        </h4>
        <div
          className={`${styles.wishlist} d-flex justify-content-center align-items-center`}
        >
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <div className={styles.price}>
        {isLoading && <Skeleton times={2} classSkeleton={classes.line} />}
        {!isLoading && product && (
          <>
            {product.sale_percent !== 0 && <p>Sale: {product.sale_percent} </p>}
            Price: {product.last_price}
          </>
        )}
      </div>

      {isLoading && <Skeleton times={2} classSkeleton={classes.line} />}
      {!isLoading && product && (
        <>
          <p className={styles["quantity__title"]}>
            In Stock: {product.inStock ? "Normal" : "Out of product"}
          </p>
          <p className={styles["quantity__title"]}>
            Type: {product.type_product}
          </p>
        </>
      )}
      <div
        className={`${styles["add__to__cart"]} d-flex justify-content-between align-items-center`}
      >
        <div
          className={`${styles.quantity} d-flex justify-content-center align-items-center`}
        >
          <div onClick={decrementHandler} className={styles.btn}>
            -
          </div>
          <div>
            <input
              type="number"
              min="1"
              max="100"
              value={quantity}
              onChange={(event) => setQuantity(+event.target.value)}
            />
          </div>
          <div onClick={incrementHandler} className={styles.btn}>
            +
          </div>
        </div>
        <div className={styles["btn__add"]}>
          <Button onClick={addCartHandler} variant="outlined">
            Add To Cart
          </Button>
        </div>
      </div>
      <div className={`${styles.space} w-100`}>
        <Link to="/checkout">
          <Button className="w-100" variant="contained">
            Buy it now!
          </Button>
        </Link>
      </div>
      <Methods setContent={setContent} setChangeLayout={changeToggleHandler} />
      <Delivery />
    </Col>
  );
};

export default DetailProduct;
