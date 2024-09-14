import { Schema } from 'mongoose';

export const reviewSchema = new Schema(
  {
    reviewer: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { _id: false, versionKey: false },
);
