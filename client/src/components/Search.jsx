import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search({ products, setProducts, search, setSearch }) {

 const handleChange = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if(search === "") return;
    const fetchProducts = async () => {
      const response = await fetch(`/api/product/search/${search}`);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, [search]);

  return (
    <div className="p-2">
      <form
        action=""
        className="border-2 bg-white border-pink-600 rounded flex"
      >
        <input
          type="text"
          className="py-1 px-2 rounded text-pink-600 outline-none w-full"
          name="search"
          id="search"
          placeholder="Search..."
          value={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="flex justify-center px-2 text-pink-600 items-center text-xl"
        >
          <IoIosSearch />
        </button>
      </form>
      <div className="my-10 flex gap-3 items-center px-2">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/social-network-86661.appspot.com/o/images%2F1733429674610_sleepant.jpg?alt=media&token=2606bff0-9a7a-49d1-9265-0ad57532aa1d"
          alt=""
          className="w-12 aspect-square rounded-full"
        />
        <h2 className="text-xl text-pink-600 font-semibold">
          Đồ đẹp ở dưới này nhe
        </h2>
      </div>
    </div>
  );
}
