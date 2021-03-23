import React, { useEffect, useState } from "react";
import store from "../../redux/store";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";
const Cart = () => {
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState(store.getState().shop.cart);
  useEffect(() => {
    let count = 0;
    let total = 0;
    let s = [...store.getState().shop.cart];
    s.forEach((v) => {
      count += parseInt(v.qty);
      total += parseInt(v.total);
    });
    setCartItems(count);
    setCartTotal(total);
    setCart(store.getState().shop.cart);
  }, []);
  const updateSummary = () => {
    let count = 0;
    let total = 0;
    let s = store.getState().shop.cart;
    s.forEach((v) => {
      count += v.qty;
      total += v.total;
    });
    setCartItems(count);
    setCartTotal(total);
    setCart(store.getState().shop.cart);
  };
  store.subscribe(updateSummary);
  return (
    <div className="carts">
      <div className="CartItems">
        {cart.map((cartItem) => {
          return <CartItem item={cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="cartSummary">
        <p style={{ fontSize: 17, fontWeight: "bold", marginLeft: 10 }}>
          Cart Summary
        </p>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <span>TOTAL: ({cartItems} Items)</span>
          PKR {cartTotal}
        </span>
        <div id="button">
          <span style={{ color: "white" }}>Proceed to Checkout</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
