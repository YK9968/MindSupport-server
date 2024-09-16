import { Schema, model } from 'mongoose';
import { emailRegxp } from '../../constants/index.js';
import { saveError } from './hooks.js';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegxp,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

userSchema.post('save', saveError);
export const UserCollection = model('users', userSchema);
