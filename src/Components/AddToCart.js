import React from "react";

function AddToCart(props) {
  return (
    <button
      onClick={() => {
        props.onAdd();
        props.onCheck();
      }}
      className="btn btn-outline-dark mt-auto"
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
