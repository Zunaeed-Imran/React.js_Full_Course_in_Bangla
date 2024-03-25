import React from 'react'
import { Link } from 'react-router-dom';



const Nav_bar2 = () => {


  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/contact">Contact</Link>
      <Link to="*"></Link>
    </nav>
  )
}

export default Nav_bar2;
