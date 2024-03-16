import React from 'react'

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const React_toastify = () => {

  const handleAdd = () => {
    toast('Added the toast');
  }
  const handleDel = () => {
    toast("Deleted");
  }

  // another way
  const notify = () => toast('Wow so easy!');

  return (
    <>
      <div>
        <button onClick={handleAdd}>Add Toast</button>
        
        {/* only one time import is enough */}
        <ToastContainer />
      </div>
      <div>
        <button onClick={handleDel}>Delete</button>
      </div>
      <div>
        <button onClick={notify}>*</button>
      </div>
    </>
  );
}

export default React_toastify;
