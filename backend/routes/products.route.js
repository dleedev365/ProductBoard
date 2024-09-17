import { Router } from 'express';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const products = Router();

products.get('/', getProducts);
products.post('/', createProduct);
products.put('/:id', updateProduct);
products.delete('/:id', deleteProduct);

export default products;
