import { Schema, model } from 'mongoose';
import { reviewSchema } from './reviews.js';
import { saveError } from './hooks.js';

const favoriteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    reviews: {
      type: [reviewSchema],
      required: true,
    },
    price_per_hour: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    license: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    initial_consultation: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: true,
    },
    mainId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

favoriteSchema.post('save', saveError);

export const FavoriteCollection = model('favorites', favoriteSchema);
