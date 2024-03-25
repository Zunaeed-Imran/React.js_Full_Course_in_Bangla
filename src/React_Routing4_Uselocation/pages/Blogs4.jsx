import React, { useState } from 'react'
import { blogsData } from './Data4';
import { Link } from 'react-router-dom';




const Blogs4 = () => {

  const [blogs, setBlogs] = useState(blogsData);

  const truncateString = (str, num) => {
    if(str.length > num){
      return str.slice(0, num) + "..."
    }else{
      str;
    }
  }


  return (
    <>
      <h1>Blogs Page.</h1>

      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return <article key={id}>
            <h3>{title}</h3>
            <p>{truncateString(body, 100)}</p>

            <Link to={title}>Learn More</Link>
          </article>
        })};
      </section>
    </>
  )
}

export default Blogs4;
