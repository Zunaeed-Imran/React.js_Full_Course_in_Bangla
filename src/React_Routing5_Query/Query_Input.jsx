// in this file we Learn query Parameter's.


import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';




const Query_Input = () => {

  const [search, setSearch] = useSearchParams();

  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({name: name, age: age});
  }

  return (


    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder='Name'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }} />
        </div>
        <div>
        <input
          type="number"
          name="age"
            placeholder='Age'
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }} />
        </div>
        <button type='submit'>Find User</button>
      </form>  
    </>
  )
}

export default Query_Input
