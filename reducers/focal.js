import { combineReducers } from "redux";
import { navigationReducer } from "./navigation";

export let reducerPack = combineReducers(
    {navigation: navigationReducer}
)