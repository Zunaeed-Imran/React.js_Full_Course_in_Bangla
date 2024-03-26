import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Error from '../pages/Error';
import Nav_bar from '../layout/Nav_bar';
import Protected from './Protected';




const Index = () => {

  const [login, setLogin] = useState(false);


  return (
    <BrowserRouter>
      <Nav_bar />

      {login ? (
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          Log Out
        </button>
      ) : (
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          Login
        </button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-blog"
          element={
            <Protected login={login}>
              <AddBlog />
            </Protected>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
