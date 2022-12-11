import React, { Fragment } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SignupButton from './SignupButton';
import { Button } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import { useNavigate } from 'react-router-dom';






const LogSignStructure = () => {
    
    
    const navigate = useNavigate();

    function handleClickLogin() {
        navigate('/login');
    }

    function handleClickSignup() {
        navigate('/signup');
    }
    return (
        <div className='log-sign-structure-style'>
            <Fragment>
                <MainHeader />
                <br></br>
                <Button onClick={handleClickLogin}>
                Login
                </Button>
                <br></br>
                <br></br>
                <Button onClick={handleClickSignup}>
                
                Signup
                </Button>
            </Fragment>
        </div>
    )
}

export default LogSignStructure
