import express from 'express';
import cors from 'cors';
import env from './utils/env.js';
import { getAllPsychologists } from './services/psychologists.js';

const PORT = Number(env('PORT', '3000'));
export default function setupServer(second) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get('/psychologists', async (req, res) => {
    const data = await getAllPsychologists();

    res.status(200).json({
      data,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
