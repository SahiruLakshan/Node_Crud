import express from 'express';
const router = express.Router();
import {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} from '../controllers/productController.js';

router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

export default router;
