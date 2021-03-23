import { products } from "../../../data/productsList";
import * as actions from "../../actions/Shopping/actionTypes";
const InitState = {
  cart: [],
  products: [...products],
};
const ShoppingReducer = (state = InitState, action) => {
  switch (action.type) {
    case actions.ADD_CART: {
      let c = state.cart;
      let index = c.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].qty += 1;
        state.cart[index].total = parseInt(
          action.payload.price * state.cart[index].qty
        );
      } else {
        state.cart.push({
          ...action.payload,
          total: action.payload.price,
          qty: 1,
        });
      }
      return { ...state };
    }
    case actions.ADJUST_QTY: {
      let item = state.cart.findIndex((i) => i.id === action.payload.id);
      let q = state.cart[item].qty;
      if (action.itemQty > q) {
        state.cart[item].total += state.cart[item].price;
      } else {
        state.cart[item].total -= state.cart[item].price;
      }
      state.cart[item].qty = parseInt(action.itemQty);

      return { ...state };
    }
    case actions.REMOVE_PROD: {
      let i = state.cart.filter((item) => item.id !== action.payload.id);
      state.cart = i;
      return { ...state, cart: i };
    }
    default:
      return state;
  }
};
export default ShoppingReducer;
