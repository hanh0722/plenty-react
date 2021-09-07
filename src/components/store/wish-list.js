import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlist: []
}

const wishListSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishList(state, action){
            console.log(action.payload);
        }
    }
})

export const wishListActions = wishListSlice.actions;

export default wishListSlice;