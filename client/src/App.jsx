import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Delete from "./pages/Delete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/product" element={<Product />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
