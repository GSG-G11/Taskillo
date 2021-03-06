import {
  SendEmail,
  Signup,
  Login,
  Project,
  Staff,
  Dashboard,
  Task,
  LandingPage,
  Calendarr,
} from './pages';
import { Overview, List, Board } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from './state/user';
import { getToken } from './utils';
import { useEffect } from 'react';
import { setNavUser } from './state/navUser';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = getToken();
    user && dispatch(setUserInfo(user));
    localStorage.getItem('updatedImage')
      ? user &&
        dispatch(
          setNavUser({
            username: user.username,
            email: user.email,
            image: localStorage.getItem('updatedImage'),
          })
        )
      : user &&
        dispatch(
          setNavUser({
            username: user.username,
            email: user.email,
            image: user.image,
          })
        );
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="calendar" element={<Calendarr />} />
        <Route path="/project/:id" element={<Project />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="list" element={<List />} />
          <Route path="board" element={<Board />} />
        </Route>
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
      <ToastContainer />
    </div>
  );
}
