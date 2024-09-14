import { FavoriteCollection } from '../db/models/favorites.js';

export const getAllFavoritesPsychologists = async (id) => {
  const psychologists = FavoriteCollection.find({ userId: id });
  return psychologists;
};

export const addFavoritesPsychologists = async (data) => {
  const psychologists = FavoriteCollection.create(data);
  return psychologists;
};

export const deleteFavoritesPsychologists = async (filter) => {
  const psychologists = FavoriteCollection.findOneAndDelete(filter);
  return psychologists;
};
