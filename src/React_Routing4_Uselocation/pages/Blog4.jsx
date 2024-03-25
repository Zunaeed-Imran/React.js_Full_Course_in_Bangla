import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { blogsData } from './Data4';




const Blog4 = () => {

  const { title } = useParams();

  const [bodyData, setBodyData] = useState();

  useEffect(() => {
    const blog4Data = blogsData.filter((blog) => blog.title === title);
    setBodyData(blog4Data[0].body);
  }, []);

  return (


    <>
      <h1>{title}</h1>
      <p>{bodyData}</p>

    </>
  )
}

export default Blog4;
