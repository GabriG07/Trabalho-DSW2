import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Reader from './pages/Reader.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tela2" element={<Reader />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
