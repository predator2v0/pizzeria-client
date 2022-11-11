const INITIAL_STATE = {
    items: [], // id, name, ingredients,topping, price, quantity
    total: 0,
    status: "pending",
};
export const cartReducer = (cartState = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_CART": {
            // const inCart = cartState.cart.find(
            //     (item) => item.id === action.payload.id
            // )
            //     ? true
            //     : false;
            // console.log(inCart);
            return {
                ...cartState,
                items: [...cartState.items, action.payload],
                total: cartState.total + action.payload.price,
            };
        }
        case "REMOVE_ITEM_FROM_CART": {
            return {
                ...cartState,
                items: cartState.items.filter(
                    (item) => item.id !== action.payload.id
                ),
                total: cartState.total - action.payload.price,
            };
        }
        case "CLEAR_CART": {
            cartState = INITIAL_STATE;
            return cartState;
        }
        default: {
            return cartState;
        }
    }
};
