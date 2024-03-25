import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from './Data4';




const Blog4 = () => {

  // we use useparams()
  const { title } = useParams();

  // we use useLocation()
  const location = useLocation();


  // const [bodyData, setBodyData] = useState();

  // useEffect(() => {
  //   const blog4Data = blogsData.filter((blog) => blog.title === title);
  //   setBodyData(blog4Data[0].body);
  // }, []);

  return (


    <>
      <h1>{title}</h1>
      <p>{location.state.body}</p>
    </>
  )
}

export default Blog4;
