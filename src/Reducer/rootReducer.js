
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    productR: productReducer,
    authR: authReducer,
    profileR: profileReducer
})