// src/db/models/student.js

import { Schema, model } from 'mongoose';

const reviewSchema = new Schema(
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

const psychologistsSchema = new Schema(
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
  },
  {
    versionKey: false,
  },
);

export const PsychologistsCollection = model(
  'psychologists',
  psychologistsSchema,
);
