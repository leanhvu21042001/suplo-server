import APIError from "@/utils/ApiError";

export default (err, _req, _res, next) => {
  let convertedError = err;

  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }

  next(convertedError);
};
