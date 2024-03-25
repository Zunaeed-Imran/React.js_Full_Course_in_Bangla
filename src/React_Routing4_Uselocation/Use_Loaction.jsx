import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home4 from './pages/Home4';
import Error4Page from './pages/Error4Page';
import Contact4 from './pages/Contact4';
import Blogs4 from './pages/Blogs4';
import Nav_Bar4 from './pages/Nav_Bar4';
import Blog4 from './pages/Blog4';




const Use_Loaction = () => {


  return (
    <BrowserRouter>
      <Nav_Bar4/>
      <Routes>
        <Route path='/home' element={<Home4/>} />
        <Route path='/blogs' element={<Blogs4/>} />
        <Route path='/blogs/:title' element={<Blog4/>} />
        <Route path='/contact' element={<Contact4/>} />
        <Route path='*' element={<Error4Page/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Use_Loaction;
