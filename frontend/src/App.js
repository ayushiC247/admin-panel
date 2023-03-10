import "antd/dist/reset.css";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Dashboard from "./components/dashboard";
import LoginForm from "./components/login";
import Profile from "./components/profile";
import Home from "./components/home";
import Signup from "./components/signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { loginSlice } from "./redux/slice/auth-slice";
import ForgotPassword from "./components/forgotPassword";
import Success from "./components/success";
import Otp from "./components/otp";
import ResetPassword from "./components/resetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
