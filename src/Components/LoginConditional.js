import React from 'react';
import Login from './LogSignStructure';


const LoginConditional = (props)  => {
    const loginCheck = props.loginCheck;
    if (loginCheck === 'Login') {
        return <Login />;
    }
    else if (loginCheck === 'Post') {
        return <h3>This feature is currently in development...</h3>;
    }
}

export default LoginConditional