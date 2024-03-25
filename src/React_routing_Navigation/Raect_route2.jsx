import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home2 from './pages/Home2';
import Error_page2 from './pages/Error_page2';
import Contact2 from './pages/Contact2';
import Blogs2 from './pages/Blogs2';
import Nav_bar2 from './Nav_bar2';

const Raect_route2 = () => {
  return (
    <BrowserRouter>
      <Nav_bar2/>
      <Routes>
        <Route path='/home' element={<Home2/>} />
        <Route path='/blogs' element={<Blogs2/>} />
        <Route path='/contact' element={<Contact2/>} />
        <Route path='*' element={<Error_page2/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Raect_route2;
