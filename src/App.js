import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Post from './components/Post';

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="social-buttons position-fixed">
        <a href="#"><i class="shadow-lg text-bmi fa fa-whatsapp"></i></a>
        <a href="#"><i class="shadow-lg text-bmi fa fa-facebook-f"></i></a>
        <a href="#"><i class="shadow-lg text-bmi fa fa-twitter"></i></a>
        <a href="#"><i class="shadow-lg text-bmi fa fa-instagram"></i></a>
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Blog /> } />
        <Route path='/posts/:title' element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}
