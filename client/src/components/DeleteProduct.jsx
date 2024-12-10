import React from "react";
import { Link } from "react-router-dom";

export default function DeleteProduct({ product, setIsLoadAgain, isLoadAgain }) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`https://ohshiec-api.vercel.app/api/product/delete/${product._id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log(data);
            setIsLoadAgain(!isLoadAgain);
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <div className="flex items-center gap-5">
      <img
        src={product.image}
        className="w-20 aspect-square"
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <Link className="text-blue-500 underline" to={`${product.link}`}>{product.link}</Link>
      <button onClick={handleDelete} className="border px-2 py-1 bg-red-600 text-white">Delete</button>
    </div>
  );
}
