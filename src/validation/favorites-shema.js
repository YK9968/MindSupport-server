import Joi from 'joi';

export const addFavoritesShema = Joi.object({
  isFavorite: Joi.boolean().required(),
  mainId: Joi.string().required(),
});
