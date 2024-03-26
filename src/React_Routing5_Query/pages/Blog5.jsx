import React from 'react'
import { useLocation, useParams } from 'react-router-dom';




const Blog5 = () => {


  const { title } = useParams();

  const loaction5 = useLocation();


  return (
    <>
      <h1>{title}</h1>
      <p>{loaction5.state.body}</p>
    </>
  )
}

export default Blog5;
