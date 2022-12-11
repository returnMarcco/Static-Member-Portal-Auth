import React from 'react';

import { useNavigate} from "react-router-dom";


const BackButtonToHome = () => {
  
    
 const navigate = useNavigate();

  return (
    <div className='back-to-home-button-style'>
        <button onClick={navigate('/')}>Back To Signup</button>
    </div>
  )
}
export default BackButtonToHome;
