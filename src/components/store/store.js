import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import buttonSlice from "./button-top";
import CartSlice from "./cart";
import ProductSlice from "./Product";
import wishListSlice from "./wish-list";
import styleDetailSlice from "./style-detail";
const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer,
        button: buttonSlice.reducer,
        cart: CartSlice.reducer,
        product: ProductSlice.reducer,
        wishlist: wishListSlice.reducer,
        detail: styleDetailSlice.reducer
    }
})

export default store;