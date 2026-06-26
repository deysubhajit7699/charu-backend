import mongoose from 'mongoose';

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  photo: { type: String },
  bio: { type: String },
});

// Single document storing all editable About page content
const aboutSchema = new mongoose.Schema(
  {
    story: { type: String, required: true },
    mission: { type: String },
    vision: { type: String },
    heroImage: { type: String },
    team: [teamMemberSchema],
  },
  { timestamps: true }
);

export default mongoose.model('About', aboutSchema);