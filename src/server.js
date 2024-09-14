import express from 'express';
import cors from 'cors';
import env from './utils/env.js';
import psychologistsRouter from './routes/psychologists.js';
import favoritesRouter from './routes/favorites.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';

const PORT = Number(env('PORT', '3000'));
export default function setupServer(second) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use('/psychologists', psychologistsRouter);
  app.use('/favorites', favoritesRouter);

  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
