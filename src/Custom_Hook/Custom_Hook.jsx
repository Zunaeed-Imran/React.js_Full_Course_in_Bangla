import React from 'react';
import custom_hook1 from './custom_hook1';

const Custom_Hook = (url) => {
  const { data, isloading, error } = custom_hook1(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const loadingMassege = <p>Loading form API..........</p>;
  const errorMassege = <p>Error Caught See Url</p>;

  const displayMessage =
    data &&
    data.map((data) => {
      return <p key={data.id}>{data.title}</p>;
    });

  return (
    <>
      <h1>Todo</h1>
      {isloading ? "yes" : "No"}
      {error}
      {displayMessage}
    </>
  );
};

export default Custom_Hook;
