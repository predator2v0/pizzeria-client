export const addItemToCart = (item) => {
    return {
        type: "ADD_ITEM_TO_CART",
        payload: item,
    };
};
export const removeItemFromCart = (item) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: item,
    };
};
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    };
};
// export const setItemQuantity = (itemId, quantity) => {
//     return {
//         type: "SET_ITEM_QUANTITY",
//         payload:{
//             id: itemId,
//             qty: quantity
//         }
//     }
// }
// export const addPrice = (price) => {
//     return {
//         type: "INCR_PRICE",
//         payload: price
//     }
// }
// export const reducePrice = (price) => {
//     return {
//         type: "DECR_PRICE",
//         payload: price
//     }
// }
