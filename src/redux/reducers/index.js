import { combineReducers } from "redux";
import ShoppingReducer from "./Shopping/shoppingReducer";
const reducer = combineReducers({
  shop: ShoppingReducer,
});
export default reducer;
