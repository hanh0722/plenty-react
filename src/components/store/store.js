import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import buttonSlice from "./button-top";
import CartSlice from "./cart";
const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer,
        button: buttonSlice.reducer,
        cart: CartSlice.reducer
    }
})

export default store;