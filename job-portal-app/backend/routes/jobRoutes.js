import express from 'express';
import { createJob, getAllJobs } from '../controllers/jobController.js';
import { protect, adminOnly } from '../middlewares/authMiddleware.js';
import { validateJobCreation } from '../validations/jobValidation.js';

const router = express.Router();

// Create job (admin only)
router.post('/create', protect, adminOnly, validateJobCreation, createJob);

// Get all jobs (different access based on user type)
router.get('/', protect, getAllJobs);

export default router;