import { Router } from 'express';
import {
  addFavoritesPsychologistsController,
  deleteFavoritesPsychologistsController,
  getAllFavoritesPsychologistsController,
} from '../controllers/favorites.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';
import { validateBody } from '../utils/validateBody.js';
import { addFavoritesShema } from '../validation/favorites-shema.js';

const favoritesRouter = Router();

favoritesRouter.get('/', ctrlWrapper(getAllFavoritesPsychologistsController));

favoritesRouter.post('/', validateBody(addFavoritesShema), ctrlWrapper(addFavoritesPsychologistsController));

favoritesRouter.delete('/:psychologistId', isValidId, ctrlWrapper(deleteFavoritesPsychologistsController));

export default favoritesRouter;
