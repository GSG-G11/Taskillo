const customError = (message: any, status: any) => {
  const error: any = new Error(message);
  error.status = status;
  return error;
};

export default customError;
