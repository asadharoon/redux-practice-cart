import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustQty,
  RemoveProd,
} from "../../../redux/actions/Shopping/actions.shopping";
import "./CartItem.css";
const CartItem = ({ item, adjustQtty, removeProduct }) => {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQtty(item, e.target.value);
  };
  return (
    <div className="cart-card">
      <img src={item.image} alt={item.title} id="cart-image" />
      <div className="cart-cols">
        <p>{item.title}</p>
        <p>{item.description}</p>
      </div>
      <div className="cart-cols-2">
        <div style={{ display: "flex", alignItems: "center" }}>
          Qty
          <input
            min="1"
            type={"number"}
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>

        <img
          onClick={() => removeProduct(item)}
          id="cart-del"
          src="https://image.flaticon.com/icons/svg/709/709519.svg"
          alt="delete-cart"
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    adjustQtty: (item, qty) => dispatch(adjustQty(item, qty)),
    removeProduct: (item) => dispatch(RemoveProd(item)),
  };
};
export default connect(null, mapDispatchToProps)(CartItem);
