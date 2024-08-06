import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import AddUser from './components/AddUser';
import LoginDetails from './components/LoginDetails';
import UserDetails from './components/UserDetails';

function APP() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/adduser/:id" element={<AddUser />} />
        <Route path="/login-details" element={<LoginDetails />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Routes>

    </>
  );
}

export default APP;
