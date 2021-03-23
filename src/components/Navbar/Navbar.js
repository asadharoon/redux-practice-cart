import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import store from "../../redux/store";
import "./navbar.css";
const Navbar = (props) => {
  const [cartCount, setCartCount] = useState(0);
  const history = useHistory();
  const getCurrentState = () => {
    return [...store.getState().shop.cart];
  };

  const updateStore = () => {
    let i = getCurrentState();
    let count = 0;
    i.forEach((item) => {
      count += parseInt(item.qty);
    });

    if (cartCount !== count) {
      setCartCount(count);
    }
  };
  store.subscribe(updateStore);

  return (
    <div className="nbar">
      <p id="header">Redux Shopping Cart</p>
      <div id="cartHeader" onClick={() => history.push("/cart")}>
        <span id="cartHeading">Cart</span>
        <img
          className="cartImg"
          src="https://image.flaticon.com/icons/svg/102/102276.svg"
          alt="shopping cart"
        />
        <div className="cartCount">{cartCount}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
