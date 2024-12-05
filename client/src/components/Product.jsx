import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  let productName = product.name;
  if (productName.length > 30) {
    productName = productName.substring(0, 30) + "...";
  }
  return (
    <Link to={product.link} className="w-1/3 p-2" key={product._id}>
      <img
        src={product.image}
        alt=""
        className="w-full aspect-square object-cover rounded"
      />
      <h1 className="text-md text-pink-600 text-center">{productName}</h1>
    </Link>
  );
}
