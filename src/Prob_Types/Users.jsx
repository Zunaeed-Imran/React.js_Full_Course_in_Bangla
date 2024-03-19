import React from 'react'

import { PropTypes} from 'prop-types';



const Users = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h2>{props.userId}</h2>
    </div>
  );
};



// Users is the file name
Users.propTypes = {
  // key Value
  userName: PropTypes.number,
  userId: PropTypes.number,
};

export default Users;
