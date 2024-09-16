import createHttpError from 'http-errors';
export const validateBody = (shema) => {
  const func = async (req, res, next) => {
    try {
      await shema.validateAsync(req.body, {
        abortEarly: false,
      });
    } catch (error) {
      console.log('first');
      next(createHttpError(400, error.message));
    }
  };
  return func;
};
