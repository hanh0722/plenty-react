import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";

const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer
    }
})

export default store;