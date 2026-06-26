import { asyncHandler } from '../../utils/asyncHandler.js';
import * as categoryService from './category.service.js';

// GET /api/categories - used by Products page for filter dropdown/sidebar
export const listCategories = asyncHandler(async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json({ success: true, data: categories });
});

export const addCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.createCategory(req.body);
  res.status(201).json({ success: true, data: category });
});

export const editCategory = asyncHandler(async (req, res) => {
  const category = await categoryService.updateCategory(req.params.id, req.body);
  res.json({ success: true, data: category });
});

export const removeCategory = asyncHandler(async (req, res) => {
  await categoryService.deleteCategory(req.params.id);
  res.json({ success: true, message: 'Category deleted' });
});