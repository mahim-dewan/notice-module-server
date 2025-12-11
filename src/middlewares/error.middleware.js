// src/middlewares/error.middleware.js
export const errorHandler = (err, req, res, next) => {
  console.log("🔥 ERROR:", err);

  // 1. Handle Mongoose validation errors (400)
  if (err.name === "ValidationError") {
    err.statusCode = 400;
  }

  // 2. Handle CastErrors (invalid ID)
  if (err.name === "CastError") {
    err.statusCode = 400;
    err.message = `Invalid ${err.path}: ${err.value}`;
  }

  // 3. Duplicate key errors
  if (err.code === 11000) {
    err.statusCode = 400;
    err.message = "Duplicate field value entered";
  }

  // 4. Default values
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    errors: err.errors || undefined, // show detailed mongoose field errors
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};
