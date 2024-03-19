import React, { useEffect, useState } from 'react';

const Input_Dynamic_style = () => {
  const [name, setName] = useState();
  const [valid, setValid] = useState(null);

  useEffect(() => {
    if (name && name.length < 4) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name]);

  const handleChange = event => {
    setName(event.target.value);
  };

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
