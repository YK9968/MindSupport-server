import createHttpError from 'http-errors';
import { getAllPsychologists, getPsychologistById } from '../services/psychologists.js';

export const getAllPsychologistsController = async (req, res) => {
  const data = await getAllPsychologists();

  res.status(200).json({
    status: 200,
    message: 'Successfully found psychologists!',
    data,
  });
};
export const getPsychologistByIdController = async (req, res) => {
  const { psychologistId } = req.params;

  const data = await getPsychologistById(psychologistId);
  if (!data) {
    throw createHttpError(404, `Psychologist by id: ${psychologistId} not found`);
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found psychologist by id: ${psychologistId}!`,
    data,
  });
};
