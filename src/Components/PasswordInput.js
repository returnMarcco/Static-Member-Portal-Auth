import React from 'react';
import { Input } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import LogSignStructure from './LogSignStructure';



const PasswordInput = () => {
    
    const [userPassword, setUserPassword] = useState();
    
    
    function getUserPassword(val) {
        console.warn(val.target.value)
        setUserPassword(val.target.value)
      }
    
     
    return (
        <div className='email-input'>
            
            <Input placeholder='Enter your password' type='password' onChange={getUserPassword}/>
            
        </div>
    )
}
export default PasswordInput