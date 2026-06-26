import { asyncHandler } from '../../utils/asyncHandler.js';
import * as productService from './product.service.js';

// GET /api/products  - Products Page: list with filter/search/pagination
export const listProducts = asyncHandler(async (req, res) => {
  const { category, search, minPrice, maxPrice, page, limit } = req.query;
  const result = await productService.getProducts(
    { category, search, minPrice, maxPrice },
    { page, limit }
  );
  res.json({ success: true, ...result });
});

// GET /api/products/:slug  - single product detail view
export const getProduct = asyncHandler(async (req, res) => {
  const product = await productService.getProductBySlug(req.params.slug);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json({ success: true, data: product });
});

// POST /api/products  - admin: create product
export const addProduct = asyncHandler(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json({ success: true, data: product });
});

// PUT /api/products/:id  - admin: update product
export const editProduct = asyncHandler(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json({ success: true, data: product });
});

// DELETE /api/products/:id  - admin: delete product
export const removeProduct = asyncHandler(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ success: true, message: 'Product deleted' });
});