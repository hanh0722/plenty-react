import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    url : null
}
const OrderSlice = createSlice({
    name: 'order-slice',
    initialState: initialState,
    reducers: {
        setURL(state, action) {
            state.url = action.payload
        },
        removeURL(state) {
            state.url = null;
        }
    }
})


export const orderActions = OrderSlice.actions;

export default OrderSlice;
