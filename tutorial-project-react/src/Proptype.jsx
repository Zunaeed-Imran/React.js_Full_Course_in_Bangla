import Prop from 'prop-types'

// we practice props type with this file
// we we don't give right type it show error only in consloe
// we have to import first for prop type.

function Prooptyp(proops) {
  return (
    <div className="job">
      <p>This is Prop Type Pactice</p>
      <p>Name: {proops.name}</p>
      <p>Age: {proops.age}</p>
      <p>Gender: {proops.gender}</p>
    </div>
  );
}
Prooptyp.Prop = {
  Name: Prop.string,
  Age: Prop.number,  
}

export default Prooptyp;