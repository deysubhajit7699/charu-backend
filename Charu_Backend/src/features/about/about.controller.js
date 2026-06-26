import { asyncHandler } from '../../utils/asyncHandler.js';
import * as aboutService from './about.service.js';

// GET /api/about - About Page content (story, mission, team)
export const getAbout = asyncHandler(async (req, res) => {
  const about = await aboutService.getAboutContent();
  res.json({ success: true, data: about });
});

// PUT /api/about - admin: update About page content
export const updateAbout = asyncHandler(async (req, res) => {
  const about = await aboutService.upsertAboutContent(req.body);
  res.json({ success: true, data: about });
});