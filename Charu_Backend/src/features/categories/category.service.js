import Category from './category.model.js';

export const getAllCategories = () => Category.find().sort('name');
export const createCategory = (data) => Category.create(data);
export const updateCategory = (id, data) => Category.findByIdAndUpdate(id, data, { new: true });
export const deleteCategory = (id) => Category.findByIdAndDelete(id);