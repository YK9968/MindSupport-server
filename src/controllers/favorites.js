import createHttpError from 'http-errors';
import {
  addFavoritesPsychologists,
  deleteFavoritesPsychologists,
  getAllFavoritesPsychologists,
} from '../services/favorites.js';

export const getAllFavoritesPsychologistsController = async (req, res) => {
  const data = await getAllFavoritesPsychologists(3);

  res.status(200).json({
    status: 200,
    message: 'Successfully found favorite psychologists!',
    data,
  });
};
export const addFavoritesPsychologistsController = async (req, res) => {
  const data = await addFavoritesPsychologists(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully add favorite psychologist!',
    data,
  });
};
export const deleteFavoritesPsychologistsController = async (req, res, next) => {
  const { psychologistId } = req.params;

  const data = await deleteFavoritesPsychologists({ userId: '1', mainId: psychologistId });
  if (!data) {
    next(createHttpError(404, 'Psychologist not found'));
    return;
  }

  res.status(204).send();
};
