import { PsychologistsCollection } from '../db/models/psychologists.js';

export const getAllPsychologists = async () => {
  const psychologists = PsychologistsCollection.find();
  return psychologists;
};
