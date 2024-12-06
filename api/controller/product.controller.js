import Product from "../models/product.model.js";
import removeAccents from "remove-accents";

export const createProduct = async (req, res) => {
  const { name, image, link } = req.body;
  try {
    if (!name || !image || !link) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }
    const product = await Product.create({
      name,
      nameWithoutAccents: removeAccents(name),
      image,
      link,
    });
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchProducts = async (req, res) => {
  const { query } = req.params;
  try {
    const products = await Product.find({
      nameWithoutAccents: { $regex: query, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
