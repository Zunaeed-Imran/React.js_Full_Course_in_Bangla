// This page is only for Component.

import React, { useState, useEffect } from 'react';

const custom_hook1 = (url) => {
  const [data, setData] = useState(null);

  // we take this const for see the loading massege.
  const [isloading, setIsloading] = useState(true)

  // we take this const for error handeling.
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw Error('Fetching is not Sucessful');
            } else {
              return response.json();
            }
          })
          .then(data => {
            setData(data);
            setIsloading(false);
            setError(null);
          })
          .catch(error => {
            setError(error.message);
            setIsloading(false);
          });
     }, 1000)
  }, [url]);

  return {data, isloading, error};
};

export default custom_hook1;
