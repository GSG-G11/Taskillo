const setCookie = (
  response: any,
  token: any,
  statusCode: number,
  message: string,
) => response
  .cookie('token', token, {
    httpOnly: true,
    secure: false,
  })
  .status(statusCode)
  .json({ msg: message });

export default setCookie;
