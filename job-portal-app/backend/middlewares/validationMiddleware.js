import { validationResult } from 'express-validator';

// Middleware to handle validation errors
export const validateRequest = (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);

  // If there are validation errors, return them
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      errors: errors.array().map(error => ({
        field: error.path,
        message: error.msg
      }))
    });
  }

  // If no errors, proceed to the next middleware or route handler
  next();
};

// Middleware to validate request body fields
export const validateFields = (requiredFields) => {
  return (req, res, next) => {
    const missingFields = [];

    // Check for missing required fields
    requiredFields.forEach(field => {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    });

    // If any required fields are missing, return an error
    if (missingFields.length > 0) {
      return res.status(400).json({
        message: 'Missing required fields',
        missingFields: missingFields
      });
    }

    next();
  };
};

// Middleware to sanitize input
export const sanitizeInput = (req, res, next) => {
  // Trim whitespace from string inputs
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = req.body[key].trim();
    }
  });

  next();
};

// Middleware to validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Middleware to validate password strength
export const validatePasswordStrength = (password) => {
  // Minimum 6 characters, at least one uppercase, one lowercase, and one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
  return passwordRegex.test(password);
};

// Comprehensive validation middleware
export const validateUserRegistration = [
  validateFields(['fullName', 'email', 'password', 'type']),
  sanitizeInput,
  (req, res, next) => {
    const { email, password, type } = req.body;

    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format'
      });
    }

    // Validate password strength
    if (!validatePasswordStrength(password)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long and contain uppercase, lowercase, and number'
      });
    }

    // Validate user type
    if (!['employee', 'admin'].includes(type)) {
      return res.status(400).json({
        message: 'Invalid user type'
      });
    }

    next();
  }
];

// Validation for job creation
export const validateJobCreation = [
  validateFields(['companyName', 'jobTitle', 'description', 'salary']),
  sanitizeInput,
  (req, res, next) => {
    const { companyName, jobTitle, description, salary } = req.body;

    // Validate company name
    if (companyName.length < 2) {
      return res.status(400).json({
        message: 'Company name must be at least 2 characters long'
      });
    }

    // Validate job title
    if (jobTitle.length < 2) {
      return res.status(400).json({
        message: 'Job title must be at least 2 characters long'
      });
    }

    // Validate description
    if (description.length < 10) {
      return res.status(400).json({
        message: 'Description must be at least 10 characters long'
      });
    }

    // Validate salary
    if (salary <= 0) {
      return res.status(400).json({
        message: 'Salary must be a positive number'
      });
    }

    next();
  }
];