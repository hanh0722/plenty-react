import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    error: false
}

const userDataSlice = createSlice({
    name: 'user-data',
    initialState: initialState,
    reducers: {
        getUserFromServer(state, action){
            state.user = action.payload;
            state.isLoading = false;
        },
        isLoadingFetch(state){
            state.isLoading = true;
        },
        finishedLoading(state){
            state.isLoading = false;
        },
        removeUserHandler(state) {
            state.user = null;
            state.isLoading = false;
        },
        setErrorToUser(state) {
            state.error = true;
        }
    }
})

export const userDataActions = userDataSlice.actions;
export default userDataSlice;
