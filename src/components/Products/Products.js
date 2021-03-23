import React from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem/ProductItem";

const Products = ({ products }) => {
  console.log("products are", products);
  return (
    <div
      style={{
        alignSelf: "center",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {products.map((prod) => {
        return <ProductItem key={prod.id} item={prod} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(Products);
