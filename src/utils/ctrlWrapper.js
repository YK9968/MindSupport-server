export default function ctrlWrapper(controller) {
  async function wrap(req, res, next) {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  }
  return wrap;
}
