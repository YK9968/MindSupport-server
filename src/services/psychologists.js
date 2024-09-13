import { PsychologistsCollection } from '../db/models/psychologists.js';

export const getAllPsychologists = async () => {
  const psychologists = PsychologistsCollection.find();
  return psychologists;
};
export const getPsychologistById = async (_id) => {
  const psychologists = PsychologistsCollection.findOne({ _id });
  return psychologists;
};
