import express from 'express';
import {
  listCategories,
  addCategory,
  editCategory,
  removeCategory,
} from './category.controller.js';

const router = express.Router();

router.route('/').get(listCategories).post(addCategory);
router.route('/:id').put(editCategory).delete(removeCategory);

export default router;