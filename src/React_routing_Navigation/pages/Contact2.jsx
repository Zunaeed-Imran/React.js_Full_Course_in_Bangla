import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact2 = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1>Contact Page</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis aperiam aspernatur vero hic. Eos voluptatibus voluptatem tempore, aspernatur veritatis provident repudiandae fugit sed rerum eum quo vitae optio laborum sint fuga facere quaerat quibusdam dolore deleniti corrupti quisquam obcaecati doloremque. Quas, corporis quibusdam. Id tempora officiis nihil maiores. Fugit, mollitia!</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tenetur a corporis eligendi fugit inventore reprehenderit recusandae magnam rem molestias excepturi ipsa sapiente, dolorum voluptatibus officia fugiat? Vitae, ipsam earum?</p>


      <button onClick={() => {
        navigate("/home");
      }}>Go To Home Page</button>
    </>
  )
}

export default Contact2;
