// Actually we show data by array.
// with this practice file we show the data from json file, also use prop destructuring.
// `Data` is a built in name what we used to call to display json file data.

import Data from './mapping_data.json'

function Mapping(prop) {

  const { Title, Description } = prop;

  return (
    <div>
      <h1>{Data[0].Title}</h1>
      <h4>{Data[0].Description}</h4>
      <h1>{Data[1].Title}</h1>
      <h4>{Data[1].Description}</h4>
      <h1>{Data[2].Title}</h1>
      <h4>{Data[2].Description}</h4>
      <h1>{Data[3].Title}</h1>
      <h4>{Data[3].Description}</h4>
      <h1>{Data[4].Title}</h1>
      <h4>{Data[4].Description}</h4>
    </div>
  );
}


export default Mapping;