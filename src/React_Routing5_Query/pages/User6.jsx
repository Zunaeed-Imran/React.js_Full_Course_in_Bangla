// this page is for practice search params.


import React from 'react'
import { useSearchParams } from 'react-router-dom';



const User6 = () => {

  const [searchParam, setSearchparam] = useSearchParams();

  return (
    <>
      Search parameter.
      <h1>{searchParam.get("id")}</h1>
      <h1>{searchParam.get("age")}</h1>
      <h1>{searchParam.get("name")}</h1>
    </>
  )
}

export default User6;
