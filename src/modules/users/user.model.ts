import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';

// create schema
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 50,
  },
  age: { type: Number, required: [true, 'Please enter your age'] },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      },
      message: '{VALUE} is not a valid email',
    },
    unique: true,
  },
  photo: String,
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: '{VALUE} is not valid, please provide a valid role',
    },
    default: 'user',
    required: true,
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
    required: true,
  },
});

// Create Model
const User = model<IUser>('User', userSchema);
export default User;
