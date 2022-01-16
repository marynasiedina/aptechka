import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard';
import Login from '../components/login/login';
import Main from '../components/main/main';
import Register from '../components/register/register';

function PrivateRoute({ auth }) {
  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  );
}

function App() {
  const [token, setToken] = useState();

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRoute auth={token} />} >
          <Route path='/dashboard' element={<Dashboard setToken={setToken} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
