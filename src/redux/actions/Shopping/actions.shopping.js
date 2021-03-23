import * as actions from "../../actions/Shopping/actionTypes";
export const AddtoCart = (item) => {
  return {
    type: actions.ADD_CART,
    payload: item,
  };
};
export const RemoveFromCart = (item) => {
  return {
    type: actions.REMOVE_PROD,
    payload: item,
  };
};
export const adjustQty = (item, qty) => {
  console.log("in function");
  return {
    type: actions.ADJUST_QTY,
    payload: item,
    itemQty: qty,
  };
};
export const RemoveProd = (item) => {
  return {
    type: actions.REMOVE_PROD,
    payload: item,
  };
};
