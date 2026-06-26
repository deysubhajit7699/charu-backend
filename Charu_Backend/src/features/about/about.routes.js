import express from 'express';
import { getAbout, updateAbout } from './about.controller.js';
import upload from '../../middleware/upload.js';

const router = express.Router();

router.get('/', getAbout);
router.put('/', upload.fields([{ name: 'heroImage' }]), updateAbout);

export default router;