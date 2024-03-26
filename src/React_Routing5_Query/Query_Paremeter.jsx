import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav_bar5 from './pages/Nav_bar5';
import Home5 from './pages/Home5';
import Error_page5 from './pages/Error_page5';
import Blogs5 from './pages/Blogs5';
import Blog5 from './pages/Blog5';
import Contact5 from './pages/Contact5';
import User5 from './pages/User5';
import User6 from './pages/User6';



const Query_Paremeter = () => {

  return (
    <BrowserRouter>
      <Nav_bar5/>
      <Routes>
        <Route path='/home' element={<Home5/>} />
        <Route path='/blogs' element={<Blogs5/>} />
        <Route path='/blogs/:title' element={<Blog5/>} />
        <Route path='/contact' element={<Contact5/>} />
        <Route path='*' element={<Error_page5 />} />

        {/* Practicing search parameter  */}
        <Route path='/user/' element={<User6/>} />

        
        {/* // ussParams practice.  */}
        <Route path='/user/:userid' element={<User5/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Query_Paremeter;
