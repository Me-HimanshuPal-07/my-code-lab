export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.satusCode || 500).json({
    message: err.message || "server error.",
  });
};
