import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home3 from './pages/Home3';
import Blogs3 from './pages/Blogs3';
import Blog3 from './pages/Blog3';
import Nav_bar3 from './pages/Nav_bar3';
import Contact3 from './pages/Contact3';
import Error3Page from './pages/Error3Page';




const Dynamic_Routing = () => {

  
  return (
    <BrowserRouter>
    <Nav_bar3/>
      <Routes>
        <Route path='/home' element={<Home3/>} />
        <Route path='/blogs/' element={<Blogs3/>} />
        <Route path='/blogs/:title' element={<Blog3/>} />
        <Route path='/contact' element={<Contact3/>} />
        <Route path='*' element={<Error3Page/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Dynamic_Routing;
