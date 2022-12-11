import React from 'react';
import DeakinImage from './DeakinImage';
import LoginSignStructure from './LogSignStructure';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, NavLink,  } from "react-router-dom";
import { useEffect, useState } from 'react';
import { auth } from './firebase';

const LoginSignupPage = () => {

 
    return (
        <div className='login-signup-page'>
            <DeakinImage />
            <LoginSignStructure />
            
        </div>
    )
}

export default LoginSignupPage