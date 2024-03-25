import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact4 = () => {

  const handleHome4 = useNavigate();

  return (




    <>
      <h1>Contact Page</h1>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti rem
        eaque, nam ex quasi delectus ullam voluptas earum. Veniam a fugit
        quaerat distinctio architecto officia animi adipisci odio voluptates,
        excepturi optio tenetur, provident itaque consequuntur delectus aperiam
        veritatis similique earum voluptas? Accusamus animi minima eaque
        laudantium libero beatae, eos ratione.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas
        dicta laborum fugit vel optio aliquid quibusdam facilis commodi eos sit
        inventore mollitia rem illum cupiditate ducimus odio laboriosam
        provident!
      </p>


      <button onClick={() => {
        handleHome4("/home");
      }}>Home</button>

    </>
  );
}

export default Contact4;
