// we practice nasted mapping in this file
// we used key in div for identify.


const user = [
  {
    fullname : "MD-Zunaeed_Imran",
    age : 27,
    phone : [
      { home : "01599258741" },
      { office : "42778"}
    ]
  },
  {
    fullname : "MD-Khaled_Imran",
    age: 35,
    phone: [
      {Home : "01958887745"},
      {Office : "88427"}
    ]
  }
]


function Nasted_map() {
  
  return (
    <div>
      <h2>Nasted Mapping Practice</h2>

      {user.map((user, index) => (
        <div key={index}>
          <h3>{user.fullname}</h3>
          <h3>{user.age}</h3>
          {
            user.phone.map((mobile, index) => 
            <div key={index}>
                <p>{mobile.Home}</p>
                <p>{mobile.Office}</p>
            </div>
            )
          }
        </div>
      ))}
    </div>
  );
}


export default Nasted_map;