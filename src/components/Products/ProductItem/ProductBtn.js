import React from "react";

const ProductBtn = ({ name, onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        height: 40,
        fontWeight: "bold",
        fontSize: 12,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        borderRadius: 10,
        border: "1px solid black",
        backgroundColor: "gainsboro",
        ...style,
      }}
    >
      {name}
    </div>
  );
};

export default ProductBtn;
