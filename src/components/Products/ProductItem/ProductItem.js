import React from "react";
import { connect } from "react-redux";
import { AddtoCart } from "../../../redux/actions/Shopping/actions.shopping";
import ProductBtn from "./ProductBtn";
import "./ProductItem.css";
const ProductItem = ({ item, addCart }) => {
  return (
    <div className="productCard">
      <img src={item.image} className="imageCard" alt={item.title} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 0.5,
          justifyContent: "space-around",
        }}
      >
        <span id="title">{item.title}</span>
        <span id="desc">{item.description}</span>
      </div>
      <div
        style={{
          flex: 0.2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <ProductBtn name="View Item" />
        <ProductBtn
          onClick={() => addCart(item)}
          name="Add to Cart"
          style={{ backgroundColor: "black", color: "white" }}
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (item) => dispatch(AddtoCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(ProductItem);
