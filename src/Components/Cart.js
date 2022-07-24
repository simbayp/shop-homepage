import React from "react";

function Cart(props) {
  return (
    <form class="d-flex">
      <button class="btn btn-outline-dark" type="submit">
        <i class="bi bi-cart-fill me-1"></i>
        <span> </span>
        Cart
        <span> </span>
        <span class="badge bg-dark text-white ms-1 rounded-pill">
          {props.count}
        </span>
      </button>
    </form>
  );
}

export default Cart;
