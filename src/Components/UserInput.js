import React from 'react';
import { Divider, Form, Label } from 'semantic-ui-react';

import { firestore } from './firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate, NavLink,  } from "react-router-dom";
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';



function LabelExamplePointing ()  {
  const [emailAddress, setEmailAddress] = useState();
  const [userPassword, setUserPassword] = useState();
  const navigate = useNavigate();
    

    const registerUser = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, emailAddress, userPassword);
        navigate('/login');
      }
      catch (error) {
        console.log(error);
      }
    }


  function getEmailAddress(val) {
    console.warn(val.target.value)
    setEmailAddress(val.target.value)
  }

  function getUserPassword(val) {
    console.warn(val.target.value)
    setUserPassword(val.target.value)
  }
  
  return (
      <Form>
        
        <div className='user-input'>
     
           <Form.Field>
            <br></br>
              <input type='email' onChange={getEmailAddress} placeholder='Email' />
              <Label pointing='above'>Please enter your email address</Label>
            </Form.Field>
            <Divider />

            <Form.Field>
              <input type='password' onChange={getUserPassword} placeholder='Password' />
              <Label pointing='above'>Please choose a password</Label>
            </Form.Field>
            
            <Form.Field inline>
            
            </Form.Field>
            {<button className='signup-button' type="button" onClick={registerUser}>Submit</button>}
      
      </div>
    </Form>
  )
}

export default LabelExamplePointing

