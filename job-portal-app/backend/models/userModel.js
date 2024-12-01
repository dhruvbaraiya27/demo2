import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['employee', 'admin'],
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('User', UserSchema);