import { asyncHandler } from '../../utils/asyncHandler.js';
import * as productService from '../products/product.service.js';
import * as categoryService from '../categories/category.service.js';

// GET /api/home - everything the Home Page needs in a single call:
// hero banner content, featured products, and category shortcuts.
export const getHomeData = asyncHandler(async (req, res) => {
  const [featuredProducts, categories] = await Promise.all([
    productService.getFeaturedProducts(8),
    categoryService.getAllCategories(),
  ]);

  res.json({
    success: true,
    data: {
      banner: {
        title: 'Handcrafted Pottery, Made with Heart',
        subtitle: 'Unique clay art pieces shaped by skilled artisans',
        image: '/uploads/banner-default.jpg',
      },
      featuredProducts,
      categories,
    },
  });
});