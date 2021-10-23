import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  showCart: false,
};
const helperChangeCart = (cart, isExisted, condition) => {
  const newCart = [...cart];
  newCart[isExisted].quantity = newCart[isExisted].quantity + condition;
  return newCart;
};
const removeItemFromCart = (cart, id) => {
  const newCartAfterRemove = cart.filter((item) => item.id !== id);
  return newCartAfterRemove;
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartHandler(state, action) {
      state.cart = action.payload;
    },
    addToCartHandler(state, action) {
      const isExisted = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (isExisted === -1) {
        // not existed in cart
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            quantity: action.payload.quantity ? +action.payload.quantity : 1,
          },
        ];
        // add to cart if it doesn't exist
      } else {
        // existed => increase quantity
        const newCart = helperChangeCart(
          state.cart,
          isExisted,
          action.payload.quantity ? +action.payload.quantity : 1
        );
        state.cart = newCart;
      }
    },
    increseItemHandler(state, action) {
      const isExisted = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const newCart = helperChangeCart(state.cart, isExisted, 1);
      state.cart = newCart;
    },
    decreseItemHandler(state, action) {
      const isExisted = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const quantityItem = state.cart[isExisted].quantity;
      let newCart;
      if (quantityItem === 1) {
        newCart = removeItemFromCart(state.cart, action.payload.id);
      } else {
        newCart = helperChangeCart(state.cart, isExisted, -1);
      }
      state.cart = newCart;
    },
    removeItemInCart(state, action) {
      const newCart = removeItemFromCart(state.cart, action.payload.id);
      state.cart = newCart;
    },
    showCartHandler(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const CartActions = CartSlice.actions;
export default CartSlice;
