import React, {useState} from 'react'
import { blogsData5 } from './Data5';
import { Link } from 'react-router-dom';

const Blogs5 = () => {

    const [blogs, setBlogs] = useState(blogsData5);

    const truncateString5 = (str, num) => {
      if (str.length > num) {
        return str.slice(0, num) + '...'
      } else {
        str;
      }
    };


  return (
    <>
      <h1>Blogs page.</h1>

      <section>
        {blogs.map(blog => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString5(body, 75)}</p>
              <Link to={title} state={{id, title, body}}>Learn More</Link>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Blogs5;
