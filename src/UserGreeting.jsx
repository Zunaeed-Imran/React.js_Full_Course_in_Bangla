// This practice file for Condational rendering.
// we practice it by true false [login]

function Greeting(proops) {
  const wel = <h1>  Welcome to user Page {proops.username} </h1>
  const err = <h1> You Have to login First</h1>

  return (
    proops.isLoggedin ? wel : err
  );
}

export default Greeting;