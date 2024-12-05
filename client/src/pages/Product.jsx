import React, { useState } from "react";
import storage from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Dashboard() {
  const [form, setForm] = useState({
    image: "",
    name: "",
    link: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);
      console.log("Uploaded file available at:", url);
      setImage(url);
    } catch (error) {
      console.error("Error uploading file:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, image }),
      });
      setForm({ image: "", name: "", link: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <form onSubmit={handleSubmit} className="bg-pink-200 py-3 px-5">
        <h1 className="mb-3 font-semibold text-center text-pink-600">
          Add product
        </h1>
        <div className="">
          <label
            htmlFor="image"
            className="font-semibold bg-white border py-2 px-2 flex justify-center items-center"
          >
            Chooce image
          </label>
          <input
            onChange={handleUploadImage}
            type="file"
            hidden
            id="image"
            name="image"
            accept="image/*"
          />
        </div>
        {image && (
          <div className="mt-3 flex justify-center">
            <img src={image} alt="product" className="w-20 aspect-square" />
          </div>
        )}
        <div className="mt-3">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Product name"
            className="border py-1 px-2 text-pink-600 outline-none"
            name="name"
          />
        </div>
        <div className="mt-3">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Link"
            className="border py-1 px-2 text-pink-600 outline-none"
            name="link"
          />
        </div>
        <div className="mt-3 flex justify-center">
          <button
            type="submit"
            className="bg-pink-600 text-white py-1 px-2 rounded-md"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
}
