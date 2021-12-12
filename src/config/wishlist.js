import { serverUrl } from "./url";

const getItemInWishList = `${serverUrl}/api/user/get/wishlist`;

const addItemToWishList = `${serverUrl}/api/user/wishlist`;

export {
    addItemToWishList,
    getItemInWishList
}