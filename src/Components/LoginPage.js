import React from 'react';
import { Button } from 'semantic-ui-react';
import BackButtonToHome from './LogPageBackButton';
import { Input } from 'semantic-ui-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';



const LoginPage = () => {
    const [emailAddress, setEmailAddress] = useState();
    const [userPassword, setUserPassword] = useState();
    var navigate = useNavigate();
    
    function getEmailAddress(val) {
        console.warn(val.target.value)
        setEmailAddress(val.target.value)
    }

    function getUserPassword(val) {
        console.warn(val.target.value)
        setUserPassword(val.target.value)
    }

    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(auth, emailAddress, userPassword);
          navigate('/dashboard')
        }
        catch {
          navigate('/loginerror');
        }
      }

    return (
        <div className='login-page'>
            <br></br>
            <Input className='email-login' placeholder='Enter your email...' onChange={getEmailAddress}/>
            <Input className='password-login' placeholder='Enter your password' type='password' onChange={getUserPassword}/>
            <br></br>
            <br></br>
            <Button className='login-button' onClick={() => login()}>Login</Button>
            <br></br>
            <br></br>
            <Button className='back-button' onClick={() => navigate('/')}>Back To Homepage</Button>
        </div>
    )
}

export default LoginPage