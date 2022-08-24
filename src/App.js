import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Blog from './components/Blog';

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Blog /> } />
      </Routes>
    </div>
  );
}
