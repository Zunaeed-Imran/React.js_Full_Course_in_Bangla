// Proops And Destructuring 
// actually we use destructuring for take all prop in one variable.
// With Destructuring we don't have to use 'prop.' we only have to use the name of the variable.

function Destructuring(prop) {


  const {title, descrip } = prop

  return (
    <div>
      <h1>{title}</h1>
      <h5>{descrip}</h5>
    </div>
  );
}


export default Destructuring;