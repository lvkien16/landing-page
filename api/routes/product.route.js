import express from 'express';
import { createProduct, deleteProduct, getProducts } from '../controller/product.controller.js';

const router = express.Router();

router.post("/create", createProduct);
router.get("/get-products", getProducts);
router.delete("/delete/:id", deleteProduct);

export default router;