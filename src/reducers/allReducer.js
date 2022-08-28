import { combineReducers } from "redux";
import UrlReducer from "./url";
import BlogReducer from "./blog";

const allReducer = combineReducers({UrlReducer, BlogReducer})

export default allReducer