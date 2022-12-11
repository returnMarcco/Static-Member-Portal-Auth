import React, { Fragment } from 'react';

import SignupButton from './SignupButton';
import { Button } from 'semantic-ui-react';
import MainHeader from './MainHeader';
import { useNavigate } from 'react-router-dom';

const LogSignStructure = () => {
    var navigate = useNavigate();
    return (
        <div className='login-style'>
            <Fragment>
                <MainHeader />
                <br></br>
                
                <br></br>
             
                <br></br>
                <Button onClick={navigate('/loginerror')}>
                Login
                </Button>
            </Fragment>
        </div>
    )
}

export default LogSignStructure