import React, { useState } from 'react'
import { blogsData } from '../Data3';
import { Link } from 'react-router-dom';

const Blog3 = () => {

  const [blogs, setBlogs] = useState(blogsData);

  return (
    <>
      <h1>Blog Page</h1>

      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return <article key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
            <Link to={title} >Learn More</Link>
          </article>
        })}
      </section>
     
      
    </>
  )
}

export default Blog3;
