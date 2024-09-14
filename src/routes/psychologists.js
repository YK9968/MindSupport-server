import { Router } from 'express';
import { getAllPsychologistsController } from '../controllers/psychologists.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const psychologistsRouter = Router();

psychologistsRouter.get('/', ctrlWrapper(getAllPsychologistsController));

export default psychologistsRouter;
