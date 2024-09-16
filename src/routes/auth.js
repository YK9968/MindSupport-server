import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { validateBody } from '../utils/validateBody.js';

const authRouter = Router();

authRouter.get(
  '/signup',
  ctrlWrapper(() => {}),
);
authRouter.get(
  '/signin',
  ctrlWrapper(() => {}),
);

export default authRouter;
