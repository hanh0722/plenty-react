import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isClicked: false
}
const hamburgerSlice = createSlice({
    name: 'hamburger',
    initialState,
    reducers: {
        setClickedHandler(state){
            state.isClicked = !state.isClicked;
        }
    }
})

export const hamburgerActions = hamburgerSlice.actions;

export default hamburgerSlice;