export default function errorHandler(error, req, res, next) {
  const { status = 500, message } = error;

  res.status(status).json({
    status,
    message,
    data: error.message,
  });
}
