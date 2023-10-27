import React from 'react';

function Cart(props) {
  return (
    <form className="d-flex">
      <button className="btn btn-outline-dark" type="submit">
        <i className="bi bi-cart-fill me-1"></i>
        <span> </span>
        Cart
        <span> </span>
        <span className="badge bg-dark text-white ms-1 rounded-pill">
          {props.count}
        </span>
      </button>
    </form>
  );
}

export default Cart;
