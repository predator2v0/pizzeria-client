import { combineReducers, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from "./cart/cartReducer";
import { userReducer } from "./user/userReducer";
// combining all the reducers to the rootReducer.
const rootReducer = combineReducers({
    cartReducer, userReducer
});

// creating the redux store using the root reducer.
export const store = createStore(rootReducer, composeWithDevTools());
