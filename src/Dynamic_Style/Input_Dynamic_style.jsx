import React, { useEffect, useState } from 'react';

const Input_Dynamic_style = () => {
  const [name, setName] = useState();
  const [valid, setValid] = useState(false);

  const handleChange = event => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (name.length < 2) {
      setValid(false);
    } else {
      true;
    }
  }, [name]);

  return (
    <div>
      <h3>
        Practice2:
        <input
          type="text"
          placeholder="Enter Text"
          value={name}
          onChange={handleChange}
          style={{ backgroundColor: valid ? 'green' : 'red' }}
        />
      </h3>
    </div>
  );
};

export default Input_Dynamic_style;
