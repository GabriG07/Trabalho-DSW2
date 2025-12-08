import React, { useEffect } from 'react';
import './App.css'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Reader from './pages/Reader.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppReact() {

    // const getUser = () => {
    //     fetch("http://localhost:3000/api/user")
    //     .then(response => response.json())
    //     .then(json => console.log(json));
    // }

    // useEffect(() => {
    //     getUser()
    // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tela2" element={<Reader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppReact
