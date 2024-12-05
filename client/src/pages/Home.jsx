import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Products from "../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(search !== "") return;
    const fetchProducts = async () => {
      const response = await fetch("/api/product/get-products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [search]);
  return (
    <div className="flex justify-center ">
      <div className="w-full sm:w-2/3 md:w-1/3 lg:w-1/4 bg-pink-50 min-h-[100vh]">
        <Search
          products={products}
          setProducts={setProducts}
          search={search}
          setSearch={setSearch}
        />
        <Products products={products} />
      </div>
    </div>
  );
}
