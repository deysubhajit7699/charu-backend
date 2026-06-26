// Wraps async controller functions so we don't repeat try/catch everywhere
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);