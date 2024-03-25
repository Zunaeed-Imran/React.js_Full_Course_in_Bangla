import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Error_Page from './pages/Error_Page';



const React_Router = () => {
  
  return (
    <BrowserRouter>
      <Routes />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path='*' element={<Error_Page/>} />
      <Routes />
    </BrowserRouter>
  );
};

export default React_Router;
