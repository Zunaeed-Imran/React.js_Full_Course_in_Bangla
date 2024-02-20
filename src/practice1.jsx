// This index file is in the src folder.
// This File is for basic tutorial practice,
// Practice from anisul islam react full course,
import './style.css'

const title = "This is inline CSS";
const desription = "This is Public folder CSS";
const desription2 = "This is Source Folder CSS";
const date = new Date();
const dat = date.getDate;
const month = date.getMonth;
const year = date.getFullYear;

// style inline style
const style = {
  backgroundColor : "purple",
  color : "#d18ec4",
  fontSize: "4rem",
  padding : "25px"
}

function Prac() {
  // we practice inline css in this file and use variable for inline css
  return (
    
    <div>
      <h1 style={style}>Practice App</h1>
      <h2 style={{color : "red", fontSize : "2rem"}}>{title}</h2>
      <p className="parastyle">{desription}</p>
      <p className="parastyle2">{desription2}</p>
    </div>
  );
}

export default Prac;
