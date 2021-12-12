import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getUserDataApi } from "../../../config/url";
import { userDataActions } from "../GetUserData/get-user-data";
const initialState = {
  isLoggedIn: !!localStorage.getItem('token/customer') ? true : false,
  // check if user has token or not, if we dont have token, initialstate must be false
  // if we have token => must be true => persist token
  expired: false,
  token: localStorage.getItem('token/customer') || null,
};

const removeStorageHandler = () => {
  localStorage.removeItem("token/customer");
  localStorage.removeItem("expiry/customer");
};
const isAuthSlice = createSlice({
  name: "is-auth",
  initialState: initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isLoggedIn = true;
      state.expired = false;
      state.token = action.payload;
    },
    setIsLoggedOut(state) {
      state.isLoggedIn = false;
      state.expired = false;
      state.token = null;
      removeStorageHandler();
    },
    setExpired(state) {
      state.expired = true;
    },
  },
});

export const checkUserIsAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token/customer");
    const expiryTime = localStorage.getItem("expiry/customer");
    if (!token || !expiryTime) {
      dispatch(isAuthActions.setIsLoggedOut());
      return;
    }
    const dateNow = Date.now();
    if (expiryTime < dateNow) {
      dispatch(isAuthActions.setIsLoggedOut());
      dispatch(isAuthActions.setExpired());
      dispatch(userDataActions.removeUserHandler());
      removeStorageHandler();
      return;
    } else {
      dispatch(userDataActions.isLoadingFetch());
      try {
        const data = await axios.get(getUserDataApi, {
          headers: {
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
          }
        });
        if(data.status >= 400) {
          const error = new Error(data.data?.message || "Cannot get data from server");
          error.code = data?.data?.code || 500;
          throw error;
        }
        dispatch(userDataActions.getUserFromServer(data?.data?.user));
        dispatch(isAuthActions.setIsAuthenticated(token));
      } catch (err) {
        dispatch(userDataActions.setErrorToUser());
      }
    }
    const timeLeft = expiryTime - dateNow;
    setTimeout(() => {
      dispatch(isAuthActions.setIsLoggedOut());
      dispatch(isAuthActions.setExpired());
      removeStorageHandler();
    }, timeLeft);
  };
};

export const isAuthActions = isAuthSlice.actions;
export default isAuthSlice;
