import React from 'react'
import { Link } from 'react-router-dom';




const Nav_bar = () => {

  return (

    <>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/add-blog'>Add-Blog</Link>
    </>
  )
}

export default Nav_bar;
