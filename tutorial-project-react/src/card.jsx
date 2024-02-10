import profile from './assets/imran.jpg';


function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={profile} alt="imran" />
      <h2 className='card-title'>MD. ZUNAEED IMRAN</h2>
      <p className='card-text'>I am learning and pract icing React</p>
    </div>
  );
}

export default Card;