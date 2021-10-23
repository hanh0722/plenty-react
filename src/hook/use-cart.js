import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../components/store/cart";
import useAxios from "./use-axios";
import { addToCartById } from "../config/cart";
import { useHistory } from "react-router";
import { SIGN_IN_PAGE } from "../components/link/link";
import { NotifyActions } from "../components/store/NotifyAfterLogin/NotifyAfterLogin";
import { useEffect } from "react";
const useCart = () => {
  const isLoggedIn = useSelector((state) => state.isAuth.isLoggedIn);
  const token = useSelector((state) => state.isAuth.token);
  const { isLoading, data, error, fetchDataFromServer } = useAxios();
  const dispatch = useDispatch();
  const history = useHistory();
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
    if (!error && !isLoading && data) {
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
    // add to cart when not having error
  }, [isLoading, error, data, dispatch]);
  const addCartHandler = (value, productId) => {
    if (!isLoggedIn || !token) {
      dispatch(
        NotifyActions.showedNotify({
          message: "Sign in to continue shopping",
          code: 401,
        })
      );
      history.replace(SIGN_IN_PAGE);
      return;
    }
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
  
  return {
    isLoading,
    data,
    error,
    addCartHandler,
  };
};

export default useCart;
