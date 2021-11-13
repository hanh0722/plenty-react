import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    discount: 0,
    total: 0,
    first_price: 0
}
const cartCheckoutSlice = createSlice({
    name: 'cart-checkout-slice',
    initialState: initialState,
    reducers: {
        setDiscountHandler(state, action){
            state.discount = action.payload;
            const totalPrice = state.first_price - (state.first_price * state.discount) / 100;
            state.total = Math.round(totalPrice * 100) / 100;
        },
        removeDisCountHandler(state){
            state.discount = 0;
            state.total = state.first_price;
        },
        setTotalHandler(state, action) {
            state.total = action.payload;
            state.first_price = action.payload;
        }
    }
})

export const cartCheckoutActions = cartCheckoutSlice.actions;
export default cartCheckoutSlice;