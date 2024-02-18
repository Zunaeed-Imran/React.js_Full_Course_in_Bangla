// with this file we will display the json file data using for loop.

import for_data from './mapping_data.json'

import Data from './mapping_data.json';

function Mapp(prop) {

  const {titleText, descText} = prop;

  let item = [];

  Data.map((item))

  return (
    <div>
      <h1>{titleText}</h1>
      <h3>{descText}</h3>
      
    </div>
  );
}

export default Mapp;