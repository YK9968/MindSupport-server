import { Router } from 'express';
import {
  getAllPsychologistsController,
  getPsychologistByIdController,
} from '../controllers/psychologists.js';

const psychologistsRouter = Router();

psychologistsRouter.get('/', getAllPsychologistsController);
psychologistsRouter.get('/:psychologistId', getPsychologistByIdController);

export default psychologistsRouter;
