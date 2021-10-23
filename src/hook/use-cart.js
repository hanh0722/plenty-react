import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../components/store/cart";
import useAxios from "./use-axios";
import { addToCartById, removeItemWithId } from "../config/cart";
import { useHistory } from "react-router";
import { SIGN_IN_PAGE } from "../components/link/link";
import { NotifyActions } from "../components/store/NotifyAfterLogin/NotifyAfterLogin";
import { TYPE_CART } from "./Type/Type";

const useCart = () => {
  const [type, setType] = useState(null);
  const isLoggedIn = useSelector((state) => state.isAuth.isLoggedIn);
  const token = useSelector((state) => state.isAuth.token);
  const { isLoading, data, error, fetchDataFromServer } = useAxios();
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectUserToSign = () => {
    dispatch(
      NotifyActions.showedNotify({
        message: "Sign in to continue",
        code: 401,
      })
    );
    history.replace(SIGN_IN_PAGE);
  };
  useEffect(() => {
    if (!isLoading && error) {
      dispatch(
        NotifyActions.showedNotify({
          message: error.message || "Something went wrong, please try again",
          code: error.code || 500,
        })
      );
      return;
    }
    if (!error && !isLoading && data && type) {
      if (type === TYPE_CART.ADD) {
        dispatch(CartActions.showCartHandler());
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
      }
      if (type === TYPE_CART.REMOVE) {
        dispatch(
          CartActions.removeItemInCart({
            id: data.data._id,
          })
        );
      }
    }
    // add to cart when not having error
  }, [isLoading, error, data, dispatch, type]);
  console.log(isLoading, error, data);
  const addCartHandler = (value, productId) => {
    if (!isLoggedIn || !token) {
      redirectUserToSign();
      return;
    }
    setType(TYPE_CART.ADD);
    // user must be verified before adding to cart, otherwise, back to sign in
    fetchDataFromServer({
      method: "PUT",
      url: addToCartById(productId),
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        value: value || 1,
      },
    });
    // actually, we can dispatch to add FE cart in here but if server is error or something?, return error
    // it's still dispatch and add data inside but actually, cart of user in server BE is still empty
    // dispatch(CartActions.showCartHandler());
    // dispatch(CartActions.addToCartHandler(product));
  };
  const removeItemFromCart = (productId) => {
    if (!token || !isLoggedIn) {
      redirectUserToSign();
      return;
    }
    setType(TYPE_CART.REMOVE);
    fetchDataFromServer({
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      url: removeItemWithId,
      data: {
        id: productId,
      },
    });
  };
  return {
    isLoading,
    data,
    error,
    addCartHandler,
    removeItemFromCart,
  };
};

export default useCart;
