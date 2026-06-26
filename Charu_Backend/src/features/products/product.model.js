import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    discountPrice: { type: Number, min: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    images: [{ type: String }],
    stock: { type: Number, required: true, default: 0 },
    material: { type: String }, // e.g. "Terracotta", "Stoneware", "Glazed Clay"
    dimensions: {
      height: Number,
      width: Number,
      weight: Number,
    },
    isHandmade: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    ratingsAverage: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);