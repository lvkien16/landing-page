import React from "react";
import Search from "../components/Search";
import Products from "../components/Products";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="bg-pink-50 min-h-[100vh]">
        <Search />
        <Products />
      </div>
    </div>
  );
}
