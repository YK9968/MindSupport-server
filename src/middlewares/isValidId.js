import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export default function isValidId(req, res, next) {
  const { psychologistId } = req.params;
  if (!isValidObjectId(psychologistId)) {
    return next(createHttpError(404, `Not valid id: ${psychologistId}`));
  }
  next();
}
