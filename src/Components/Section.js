import React from "react";
import FancyProduct from "./FancyProduct";
import SpecialItem from "./SpecialItem";
import SaleItem from "./SaleItem";
import PopularItem from "./PopularItem";

function Section(props) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
            <FancyProduct onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <SpecialItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <SaleItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <PopularItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <SaleItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <FancyProduct onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <SpecialItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
          <div className="col mb-5">
            <PopularItem onAdd={props.onAdd} onRemove={props.onRemove} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
