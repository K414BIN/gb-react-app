import {useContext, useEffect, useRef, useState} from 'react';
import "./style.scss";
import PropTypes from "prop-types";
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";


function App() {
    const {currentUser} = useContext(AuthContext)
    const ProtectedRoute = ({children}) =>{
        if (!currentUser) {
            return <Navigate to="/login" />
        }
        return children
    }
    console.log(currentUser)
  return (
        <BrowserRouter>
          <>
            <Routes>
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={
                      <ProtectedRoute>
                      <Home />
                      </ProtectedRoute>
                  } />
                  <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </>
        </BrowserRouter>
  );
}

export default App;
