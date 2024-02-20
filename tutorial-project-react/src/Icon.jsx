// in this folder i will practice react icon.

import './style.css'

import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa';

function Icon() {
  
  return (
    <div>
      <h1>Welcome to React Icon Page</h1>
      
      <FaFacebook className="facebook" />
      <FaTwitter className="twitter"/>
      <FaYoutube className="youtube"/>
    </div>
  );
}

export default Icon;