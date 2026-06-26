import express from 'express';
import {
  listProducts,
  getProduct,
  addProduct,
  editProduct,
  removeProduct,
} from './product.controller.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

router.get('/', listProducts);
router.post('/', upload.array('images', 5), addProduct);
router.get('/:slug', getProduct);
router.put('/:id', editProduct);
router.delete('/:id', removeProduct);

export default router;