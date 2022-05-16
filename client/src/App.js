import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, SendEmail, Signup, Login } from './pages';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './state/user';
import jwt_decode from 'jwt-decode';

function App() {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const cookie = document.cookie.split('token=')[1];
    setToken(cookie);
  }, []);

  useEffect(() => {
    if(token) {
      const {id, username, email} = jwt_decode(token);
      dispatch(setUserInfo({id, username, email}));
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sendEmail" element={<SendEmail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={
          <div>
            <h1>404 Page Not Found</h1>
            <Link to='/' >Go to Home</Link>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
