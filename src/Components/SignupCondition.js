import React from 'react';
import Signup from './Signup';

const SignUpCondition = (props) => {
    const signupForm = props.signupForm;
    if (signupForm === 'signupForm') {
        return <Signup />;
    }
}
export default SignUpCondition