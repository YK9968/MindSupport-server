import Joi from 'joi';
import { emailRegxp } from '../constants';

export const userSiginupShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegxp).required(),
  password: Joi.string().min(6).required(),
});
export const userSiginShema = Joi.object({
  email: Joi.string().pattern(emailRegxp).required(),
  password: Joi.string().min(6).required(),
});
