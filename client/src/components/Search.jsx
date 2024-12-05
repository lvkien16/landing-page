import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div className="pt-2">
      <form action="" className="border-2 bg-white border-pink-600 rounded flex">
        <input
          type="text"
          className="py-1 px-2 rounded text-pink-600 outline-none w-full"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="flex justify-center px-2 text-pink-600 items-center text-xl"
        >
          <IoIosSearch />
        </button>
      </form>
      <div className="my-10 flex gap-3 items-center px-2">
        <img src="./public/sleepant.jpg" alt="" className="w-12 aspect-square rounded-full" />
        <h2 className="text-xl text-pink-600 font-semibold">Đồ đẹp ở dưới này nhe</h2>
      </div>
    </div>
  );
}
