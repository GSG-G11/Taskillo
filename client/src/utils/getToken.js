import jwt_decode from "jwt-decode";

const getToken = () => {
  const token = document.cookie.split("token=")[1];
  return jwt_decode(token);
}

export default getToken;