import About from './about.model.js';

// The site only ever needs one About document
export const getAboutContent = () => About.findOne();

export const upsertAboutContent = async (data) => {
  const existing = await About.findOne();
  if (existing) {
    return About.findByIdAndUpdate(existing._id, data, { new: true });
  }
  return About.create(data);
};