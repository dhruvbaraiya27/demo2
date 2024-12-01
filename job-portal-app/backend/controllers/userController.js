import User from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users, excluding password field
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};