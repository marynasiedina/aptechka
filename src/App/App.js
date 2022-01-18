import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard';
import Login from '../components/login/login';
import Main from '../components/main/main';
import Register from '../components/register/register';


function App() {
  const [token, setToken] = useState(false);

  if (!token) {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register />} />
          <Route path="*" element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard setToken={setToken} />} />
        <Route path="*" element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
}

export default App;
