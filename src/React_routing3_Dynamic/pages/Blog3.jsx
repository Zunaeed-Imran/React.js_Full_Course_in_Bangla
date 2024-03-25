import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from '../Data3';

const Blog3 = () => {
  const {title} = useParams();

  const [bodyData, setBodyData] = useState();


  useEffect(() => {
    const blog3Data = blogsData.filter((blog) => blog.title === title);
    setBodyData(blog3Data[0].body);
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <p>{bodyData.slice(0, 500)}</p>
      <p>{bodyData.slice(501, 5800)}</p>
    </>
  );
};

export default Blog3;
