import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import buttonSlice from "./button-top";
import CartSlice from "./cart";
import ProductSlice from "./Product";
import wishListSlice from "./wish-list";
import styleDetailSlice from "./style-detail";
import NotifySlice from "./NotifyAfterLogin/NotifyAfterLogin";
import isAuthSlice from "./IsAuth/is-auth";
const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer,
        button: buttonSlice.reducer,
        cart: CartSlice.reducer,
        product: ProductSlice.reducer,
        wishlist: wishListSlice.reducer,
        detail: styleDetailSlice.reducer,
        notifyMessage: NotifySlice.reducer,
        isAuth: isAuthSlice.reducer
    }
})

export default store;