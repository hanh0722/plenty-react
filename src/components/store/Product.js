import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idProduct: null
}
const ProductSlice = createSlice({
    name: 'product_id',
    initialState,
    reducers: {
        setIdProduct(state, action){
            state.idProduct = action.payload;
        },
        removeProduct(state){
            state.idProduct = null
        }
    }
})

export const ProductActions = ProductSlice.actions;

export default ProductSlice;