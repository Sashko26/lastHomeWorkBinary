const responseMiddleware = (req, res, next) => {
  if (res.err) {
    const statusCode = res.err.status || 400;
    return res.status(statusCode).json({ error: true, message: res.err.message });
  }

  res.status(200).json(res.data);
};

export { responseMiddleware };
