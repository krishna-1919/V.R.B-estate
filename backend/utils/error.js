export const errorHandler = (statusCode, message) => { // this is error handler middlware to handle the errors .
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
