import {authReducer} from "./auth"
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  user: authReducer,
});