import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ prod }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-4 p-3">
      <Link to={`/product/${prod.id}`}>
        <img src={prod.image} width="100%" alt="" />
      </Link>
      <div className="p-3 text-center">
        <h4>{prod.name}</h4>
        <p>{prod.price}$</p>
      </div>
    </div>
  );
}
