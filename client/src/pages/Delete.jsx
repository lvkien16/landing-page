import React, { useEffect, useState } from "react";
import DeleteProduct from "../components/DeleteProduct";

export default function Delete() {
  const [products, setProducts] = useState([]);
  const [isLoadAgain, setIsLoadAgain] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/product/get-products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [isLoadAgain]);
  return (
    <div>
      <h1>Delete products</h1>
      <ul>
        {products.map((product) => (
          <div key={product._id}>
            <DeleteProduct
              product={product}
              setIsLoadAgain={setIsLoadAgain}
              isLoadAgain={isLoadAgain}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
