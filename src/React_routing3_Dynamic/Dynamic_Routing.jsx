import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error3Page from './pages/Error3Page';
import Contact3 from './pages/Contact3';
import Blog3 from './pages/Blog3';
import Home3 from './pages/Home3';
import Nav_bar3 from './pages/Nav_bar3';




const Dynamic_Routing = () => {

  
  return (
    <BrowserRouter>
    <Nav_bar3/>
      <Routes>
        <Route path='/home' element={<Home3/>} />
        <Route path='/blogs' element={<Blog3/>} />
        <Route path='/contact' element={<Contact3/>} />
        <Route path='*' element={<Error3Page/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Dynamic_Routing;
