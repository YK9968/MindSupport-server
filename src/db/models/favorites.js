import { Schema, model } from 'mongoose';
import { saveError } from './hooks.js';

const favoriteSchema = new Schema(
  {
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
      type: String,
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
