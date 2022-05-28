import { getToken } from './helpers';

const checkAuth = () => {
  const { username, email } = getToken();
  if (!username || !email) {
    return false;
  }
  return true;
};

export default checkAuth;
