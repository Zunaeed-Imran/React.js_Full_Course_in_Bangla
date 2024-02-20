// This file is for practicing mapping jeson data main practice file is `mapping.jsx`


function Mapping_card(prop) {
  const { titleText, descText } = prop;
  return (
    <div>
      <h3>{titleText}</h3>
      <p>{descText}</p>
    </div>
  );
}


export default Mapping_card;