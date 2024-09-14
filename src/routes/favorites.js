import { Router } from 'express';
import {
  addFavoritesPsychologistsController,
  deleteFavoritesPsychologistsController,
  getAllFavoritesPsychologistsController,
} from '../controllers/favorites.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';

const favoritesRouter = Router();

favoritesRouter.get('/', ctrlWrapper(getAllFavoritesPsychologistsController));

favoritesRouter.post('/', ctrlWrapper(addFavoritesPsychologistsController));

favoritesRouter.delete('/:psychologistId', isValidId, ctrlWrapper(deleteFavoritesPsychologistsController));

export default favoritesRouter;
