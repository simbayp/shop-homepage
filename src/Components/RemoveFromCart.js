import React from "react";

function RemoveFromCart(props) {
  return (
    <button
      onClick={() => {
        props.onRemove();
        props.onCheck();
      }}
      className="btn btn-outline-dark mt-auto"
    >
      Remove from cart
    </button>
  );
}

export default RemoveFromCart;
