import { useEffect, useState } from 'react'
import axios from 'axios';


const Json_Server = () => {

  const [users, setUsers] = useState([]);


  const getAllUsers = async () => {
    // const response = await axios.get('http://localhost:5175/User'); // another way of fetching data.
    // setUsers(response.data);   // another way of fetching.
    const response = await axios.get('/db2.json');
    console.log(response.data.User); // for debuging.
    setUsers(response.data.User);
  }

  
  useEffect(() => {
    getAllUsers();
  }, []);


  return <div>
    {users.map(user => {
      return (
        <article key={user.id}>
          <h2>{user.name}</h2>
          <img src={user.image} alt={`${user.name}'s image`} />
          <h2>{user.email}</h2>
        </article>
      );
    })}
  </div>
}

export default Json_Server;
