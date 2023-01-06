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
        <a href="#"><i class="shadow-lg text-bmi-match fa fa-whatsapp"></i></a>
  <a href="https://web.facebook.com/basileiaminintl"><i class="shadow-lg text-bmi-match fa fa-facebook-f"></i></a>
  <a href="https://t.me/basileiaminintl"><i class="shadow-lg text-bmi-match fa fa-telegram"></i></a>
  <a href="https://www.instagram.com/basileiaminintl/"><i class="shadow-lg text-bmi-match fa fa-instagram"></i></a>
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
