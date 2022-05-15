import React from 'react';
import {SendEmail, Signup} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./pages";


function App() {
  return (
    <div className="App">
      <Login />
      <SendEmail />
      <Signup /> 
    </div>
  );
}

export default App;
