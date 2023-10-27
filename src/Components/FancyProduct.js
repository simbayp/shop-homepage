import React, { useState } from 'react';
import AddToCart from './AddToCart';
import RemoveFromCart from './RemoveFromCart';

function FancyProduct(props) {
  const [isDone, setIsDone] = useState(false);

  function checkIsDone() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="card h-100">
      {/* <!-- Product image--> */}
      <img
        className="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />
      {/* <!-- Product details--> */}
      <div className="card-body p-4">
        <div className="text-center">
          {/* <!-- Product name--> */}
          <h5 className="fw-bolder">Fancy Product</h5>
          {/* <!-- Product price--> */}
          $40.00 - $80.00
        </div>
      </div>
      {/* <!-- Product actions--> */}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {isDone ? (
            <RemoveFromCart onRemove={props.onRemove} onCheck={checkIsDone} />
          ) : (
            <AddToCart onAdd={props.onAdd} onCheck={checkIsDone} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FancyProduct;
