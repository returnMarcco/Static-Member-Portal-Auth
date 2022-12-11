import React from 'react'
import { Button } from 'semantic-ui-react'
import SignUpCondition from './SignupCondition';
import { useState } from 'react';


const SignupButton = () => {
  
  const [signup, setSignup] = useState();

  return (
      <div className='signup-button'>
        <Button basic color='teal' content="Signup" primary onClick={() => setSignup('signupForm')}>Signup</Button>
       
      </div>
    
  )

}
export default SignupButton