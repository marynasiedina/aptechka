import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../components/dashboard/dashboard';
import Login from '../components/login/login';
import Main from '../components/main/main';
import Register from '../components/register/register';
import { connect } from 'react-redux';
import { setAuth } from '../reducer/actions';


function App({ auth, setAuth }) {

  if (!auth) {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/login' element={<Login setToken={setAuth} />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<Dashboard setToken={setAuth} />} />
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setAuth })(App);

