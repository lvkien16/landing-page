import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products({ products }) {
  return (
    <div className="">
      <div className="flex flex-wrap">
        {products && products.length > 0 ? (
          products.map((product) => (
            <Product product={product} key={product._id} />
          ))
        ) : (
          <h1 className="text-center text-2xl text-pink-600 w-full">
            No products found
          </h1>
        )}
      </div>
    </div>
  );
}
