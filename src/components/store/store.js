import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import buttonSlice from "./button-top";
import CartSlice from "./cart";
import ProductSlice from "./Product";
import styleDetailSlice from "./style-detail";
import NotifySlice from "./NotifyAfterLogin/NotifyAfterLogin";
import isAuthSlice from "./IsAuth/is-auth";
import userDataSlice from "./GetUserData/get-user-data";
import uploadProductSlice from "./UploadProduct/UploadProduct";
import progressSlice from "./ProgressLoading/ProgressLoading";
import navigationDashSlice from "./NavigationDash/navigation-dash";
import citySlice from "./GetCity/get-city";
import WishListSlice from "./WishList/wishlist-slice";
import OrderSlice from "./OrderSlice/OrderSlice";
const store = configureStore({
    reducer: {
        hamburger: hamburgerSlice.reducer,
        button: buttonSlice.reducer,
        cart: CartSlice.reducer,
        product: ProductSlice.reducer,
        detail: styleDetailSlice.reducer,
        notifyMessage: NotifySlice.reducer,
        isAuth: isAuthSlice.reducer,
        user: userDataSlice.reducer,
        upload: uploadProductSlice.reducer,
        progress: progressSlice.reducer,
        nav: navigationDashSlice.reducer,
        city: citySlice.reducer,
        wishlist: WishListSlice.reducer,
        orderURL: OrderSlice.reducer
    }
})

export default store;