import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  expired: false,
};

const removeStorageHandler = () => {
  localStorage.removeItem("token/customer");
  localStorage.removeItem("expiry/customer");
};
const isAuthSlice = createSlice({
  name: "is-auth",
  initialState: initialState,
  reducers: {
    setIsAuthenticated(state) {
      state.isLoggedIn = true;
      state.expired = false;
    },
    setIsLoggedOut(state) {
      state.isLoggedIn = false;
      state.expired = false;
    },
    setExpired(state) {
      state.expired = true;
    },
  },
});

export const checkUserIsAuth = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token/customer");
    const expiryTime = localStorage.getItem("expiry/customer");
    if (!token || !expiryTime) {
      return;
    }
    const dateNow = Date.now();
    if (expiryTime < dateNow) {
      dispatch(isAuthActions.setIsLoggedOut());
      removeStorageHandler();
      return;
    } else {
        dispatch(isAuthActions.setIsAuthenticated());
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
