import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { CartActions } from "../store/cart";
import Skeleton from "../UI/LoadingSkeleton/Skeleton";
import useCart from "../../hook/use-cart";
import useAxios from "../../hook/use-axios";
import { addItemToWishList } from "../../config/wishlist";
import { useSelector } from "react-redux";
import { NotifyActions } from "../store/NotifyAfterLogin/NotifyAfterLogin";
const Product = (props) => {
  const isAuth = useSelector(state => state.isAuth);
  const { isLoading, data, addCartHandler: addCartToServer, error } = useCart();
  const { isLoading: isLoadingAddItem, fetchDataFromServer, error: errorAddItem, data: dataAddItem } = useAxios();
  const dispatch = useDispatch();
  const addCartHandler = () => {
    addCartToServer(1, props.id);
  };

  useEffect(() => {
    if (!isLoading && data && !error) {
      dispatch(
        CartActions.addToCartHandler({
          id: data.data.product._id,
          name: data.data.product.title,
          imageUrl: data.data.product.images.urls[0],
          quantity: data.data.product.add_quantity,
          price: data.data.product.last_price,
          type: data.data.product.type_product,
        })
      );
      dispatch(CartActions.showCartHandler());
    }
  }, [data, isLoading, error, dispatch]);
  const addItemToWatchList = id => {
    const { isLoggedIn, token } = isAuth;
    if (!isLoggedIn || !token) {
      return;
    }
    fetchDataFromServer({
      url: addItemToWishList,
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token
      },
      data: {
        productId: id
      }
    });
  }
  useEffect(() => {
    if (isLoadingAddItem) {
      return;
    }
    if (!isLoadingAddItem && errorAddItem) {
      dispatch(NotifyActions.showedNotify({
        message: errorAddItem.message,
        code: errorAddItem.code
      }));
    }
    if (!isLoadingAddItem && dataAddItem) {
      dispatch(NotifyActions.showedNotify({
        message: 'Added item successfully',
        code: 200
      }))
    }
  }, [isLoadingAddItem, errorAddItem, dataAddItem, dispatch]);
  return (
    <div className={styles.container} style={props.style}>
      <div className={`${styles.col}`}>
        {props.isLoading && (
          <Skeleton src imageClassName={styles.loading} times={0} />
        )}
        {!props.isLoading && (
          <>
            <img src={props.imageUrl} alt="ImageItem" />
            <div className={styles.overlay}>
              <div
                onClick={() => addItemToWatchList(props.id)}
                className={`${styles.icon} ${props.isWishList && styles.active} d-flex justify-content-center align-items-center`}
              >
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className={styles.btn}>
                <Button onClick={addCartHandler} variant="contained">
                  Add to cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.item}>
        {props.isLoading ? (
          <Skeleton times={3} classSkeleton="mb-2 mt-2" />
        ) : (
          <>
            <Link to={`${props.link}`}>{props.name}</Link>
            <p>${props.price}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
