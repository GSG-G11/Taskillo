import { SendEmail, Signup } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './state/user';
import { getToken } from './utils';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getToken();
    user && dispatch(setUserInfo(user));
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sendEmail" element={<SendEmail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 Page Not Found</h1>
              <Link to="/">Go to Home</Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}
