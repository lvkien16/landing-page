import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  let productName =
    "Đồ đẹp ở dưới này nheĐồ đẹp ở dưới này nheĐồ đẹp ở dưới này nheĐồ đẹp ở dưới này nhes";
  if (productName.length > 30) {
    productName = productName.substring(0, 30) + "...";
  }
  return (
    <div className="max-w-[500px]">
      <div className="flex flex-wrap">
        <Link to="/asdf" className="w-1/3 p-2">
          <img
            src="https://product.hstatic.net/1000042622/product/img_3597_36aceba59ab4449ebeedbafb564bf403_master.jpg"
            alt=""
            className="w-full aspect-square object-cover rounded"
          />
          <h1 className="text-md text-pink-600">{productName}</h1>
        </Link>
        <Link to="/asdf" className="w-1/3 p-2">
          <img
            src="https://product.hstatic.net/1000042622/product/img_3597_36aceba59ab4449ebeedbafb564bf403_master.jpg"
            alt=""
            className="w-full aspect-square object-cover rounded"
          />
          <h1 className="text-md text-pink-600">{productName}</h1>
        </Link>
        <Link to="/asdf" className="w-1/3 p-2">
          <img
            src="https://product.hstatic.net/1000042622/product/img_3597_36aceba59ab4449ebeedbafb564bf403_master.jpg"
            alt=""
            className="w-full aspect-square object-cover rounded"
          />
          <h1 className="text-md text-pink-600">{productName}</h1>
        </Link>
        <Link to="/asdf" className="w-1/3 p-2">
          <img
            src="https://product.hstatic.net/1000042622/product/img_3597_36aceba59ab4449ebeedbafb564bf403_master.jpg"
            alt=""
            className="w-full aspect-square object-cover rounded"
          />
          <h1 className="text-md text-pink-600">{productName}</h1>
        </Link>
      </div>
    </div>
  );
}
