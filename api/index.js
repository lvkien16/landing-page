import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
const cors = require('cors');
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is runnng on port 3000!");
});

app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});