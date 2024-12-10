import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://ohshiec-api.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.status === 200) {
        console.log(data);
      }
      navigate("/admin/product")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="max-w-[500px]">
        <form
          onSubmit={handleSubmit}
          className="border-2 bg-white border-pink-600 rounded px-2"
        >
          <h1 className="font-semibold text-center text-xl mt-1 text-pink-600">Login</h1>
          <div className="mt-3">
            <input
              type="text"
              className="py-1 px-2 border-2 border-pink-600 rounded text-pink-600 outline-none w-full"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <div className="">
              <input
                type="password"
                className="py-1 px-2 border-2 border-pink-600 rounded text-pink-600 outline-none w-full"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center my-3">
            <button
              type="submit"
              className="flex justify-center bg-pink-600 px-3 py-1 rounded text-white items-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
