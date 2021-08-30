import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import buttonSlice from "./button-top";
const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer,
        button: buttonSlice.reducer
    }
})

export default store;