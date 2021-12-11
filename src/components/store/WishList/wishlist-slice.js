import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getItemInWishList } from "../../../config/wishlist";
const initialState = {
    wish_list: [],
    isLoading: false,
    isError: null,
    total_documents: null
}
const WishListSlice = createSlice({
    name: 'wish-list',
    initialState: initialState,
    reducers: {
        addItemToWishList(state, action) {

        },
        setValueToWishList(state, action) {
            state.wish_list = action.payload
        },
        wishListIsLoading(state) {
            state.isLoading = true;
        },
        wishListIsFinished(state) {
            state.isLoading = false;
        },
        setErrorToWishList(state, action){
            state.isError = action.payload;
            state.isLoading = false;
        },
        setTotalDocuments(state, action) {
            state.total_documents = action.payload;
        },
        resetWishList(state) {
            state.wish_list = [];
            state.isLoading = false;
            state.isError = null;
            state.total_documents = null;
        }
    }
})
export const getWishListOfUser = (per_page, page) => {
    return async (dispatch) => {
        const token = localStorage.getItem('token/customer');
        if(!token){
            return;
        }
        dispatch(wishListActions.wishListIsLoading());
        try{
            const data = await axios({
                url: getItemInWishList,
                headers: {
                    Authorization: 'Bearer ' + token
                },
                params: {
                    page: page || 1,
                    per_page: per_page || 8
                }
            });
            const { wishList, total_documents } = data.data;
            const mapWishList = wishList.map(item => {
                return item.productId
            })
            dispatch(wishListActions.setTotalDocuments(total_documents));
            dispatch(wishListActions.setValueToWishList(mapWishList));
        }
        catch(err){
            const error = err?.response?.data;
            const { message } = error;
            if(typeof message === 'string') {
                dispatch(wishListActions.setErrorToWishList(message));
            }
        }
        dispatch(wishListActions.wishListIsFinished());
    }
}

export const wishListActions = WishListSlice.actions;

export default WishListSlice;
