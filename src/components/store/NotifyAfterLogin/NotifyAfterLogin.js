import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showed: false,
    message: ''
}

const NotifySlice = createSlice({
    name: 'notify',
    initialState: initialState,
    reducers: {
        showedNotify(state, action){
            state.showed = true;
            state.message = action.payload || '';
            setTimeout(() => {
                state.showed = false;
            }, 5000);
            setTimeout(() => {
                state.message = '';
            }, 10000);
        },
        removeNotify(state){
            state.showed = false;
            setTimeout(() => {
                state.message = '';
            }, 5000);
        }
    }
})

export const NotifyActions = NotifySlice.actions;
export default NotifySlice;