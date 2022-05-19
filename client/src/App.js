import { SendEmail, Signup } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
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
