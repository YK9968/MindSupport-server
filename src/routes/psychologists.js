import { Router } from 'express';
import { getAllPsychologistsController, getPsychologistByIdController } from '../controllers/psychologists.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';

const psychologistsRouter = Router();

psychologistsRouter.get('/', ctrlWrapper(getAllPsychologistsController));
psychologistsRouter.get('/:psychologistId', isValidId, ctrlWrapper(getPsychologistByIdController));

export default psychologistsRouter;
