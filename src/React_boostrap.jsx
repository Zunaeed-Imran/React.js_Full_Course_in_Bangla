// in this file we practice boostrap in react app
// i can find the all import style in the `component` in react boostrap website.

// - first we have to install boostrap npmp than
// - import boostrap link in the main.jsx 
// - than import in this file than use it. like i use button in this practice folder.


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function React_boostrap() {
  return (
    <div>

      <Card>
      <h2>Card</h2>
      <p>this is practicing boostrap card.</p>
      <Button>Learn boostrap</Button>
      </Card>

    </div>
  );
}

export default React_boostrap;