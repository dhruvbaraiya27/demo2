import express from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRegistration, validateLogin } from '../validations/userValidation.js';

const router = express.Router();

// User registration
router.post('/register', validateRegistration, register);

// User login
router.post('/login', validateLogin, login);

export default router;