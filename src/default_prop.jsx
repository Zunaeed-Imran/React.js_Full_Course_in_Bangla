// in this example we practice prop default value.
import prop from 'prop-types'

function Default_prop(proops) {
  return (
    <div className="job">
     <p>This is Default Prop Practice</p>
     <p>Name: {proops.name}</p>
     <p>Age: {proops.age}</p>
    </div>
  )
  
}

Default_prop.defaultProp = {
  name: "Guest",
  age: 0
}

export default Default_prop;