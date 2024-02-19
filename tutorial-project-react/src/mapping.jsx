// with this file we will display the json file data using for loop.

import Mapping_card from './mapping_card';
import for_data from './mapping_data.json'

import Data from './mapping_data.json';

function Mapp(prop) {

  let item = [];

  // we use 'titleText' variable form mapping_card file variable, and 'Title' variable from json data file.
  item = Data.map((item) => <Mapping_card titleText={item.Title} descText={item.Description} />);

  return (
    <>
      {item}
    </>
  );
}

export default Mapp;