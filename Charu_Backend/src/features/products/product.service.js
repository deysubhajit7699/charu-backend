import Product from './product.model.js';

export const getProducts = async (filters = {}, options = {}) => {
  const { category, search, minPrice, maxPrice } = filters;
  const query = {};

  if (category) query.category = category;
  if (search) query.name = { $regex: search, $options: 'i' };
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  const { page = 1, limit = 12 } = options;
  const skip = (page - 1) * limit;

  const [products, total] = await Promise.all([
    Product.find(query)
      .populate('category', 'name slug')
      .skip(skip)
      .limit(Number(limit))
      .sort('-createdAt'),
    Product.countDocuments(query),
  ]);

  return { products, total, page: Number(page), pages: Math.ceil(total / limit) };
};

export const getProductBySlug = (slug) =>
  Product.findOne({ slug }).populate('category', 'name slug');

export const getFeaturedProducts = (limit = 8) =>
  Product.find({ isFeatured: true }).limit(limit);

export const createProduct = (data) => Product.create(data);
export const updateProduct = (id, data) => Product.findByIdAndUpdate(id, data, { new: true });
export const deleteProduct = (id) => Product.findByIdAndDelete(id);