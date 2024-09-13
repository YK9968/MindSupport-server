import {
  getAllPsychologists,
  getPsychologistById,
} from '../services/psychologists.js';

export const getAllPsychologistsController = async (req, res) => {
  const data = await getAllPsychologists();

  res.status(200).json({
    status: 200,
    message: 'Successfully found psychologists!',
    data,
  });
};
export const getPsychologistByIdController = async (req, res) => {
  const { psychologistId } = req.params;
  console.log('controller-----', psychologistId);
  const data = await getPsychologistById(psychologistId);

  if (!data) {
    res.status(404).json({
      status: 404,
      message: `Psychologist by id: ${psychologistId} not found`,
    });
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found psychologist by id: ${psychologistId}!`,
    data,
  });
};
