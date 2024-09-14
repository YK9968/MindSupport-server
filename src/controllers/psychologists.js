import { getAllPsychologists } from '../services/psychologists.js';

export const getAllPsychologistsController = async (req, res) => {
  const data = await getAllPsychologists();

  res.status(200).json({
    status: 200,
    message: 'Successfully found psychologists!',
    data,
  });
};
