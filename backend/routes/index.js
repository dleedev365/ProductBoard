import { Router } from 'express';
import ProductsRouter from './products.route.js';

const router = Router();

router.use('/products', ProductsRouter); // api/products

export default router;
