import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products({products}) {
  
  
  return (
    <div className="max-w-[500px]">
      <div className="flex flex-wrap">
        {
          products && products.map((product) => (
            <Product product={product} key={product._id} />
          ))
        }
      </div>
    </div>
  );
}
