import React from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { useState } from 'react';
import LoginConditional from './LoginConditional';

    const RadioBox = () => {
       const [loginCheck, setLoginCheck] = useState();
        return (
                <Form>
                    <div className = 'select-form'>
                    <Form.Field>
                    Selected Action: <b>{loginCheck}</b>
                    </Form.Field>
                
                    <Form.Field>
                    <Radio
                        label='Login'
                        name='radioGroup'
                        value='Login'
                        checked = {loginCheck === 'Login'}
                        onClick={() => setLoginCheck('Login')}
                    />
                    
                    </Form.Field>
                    <Form.Field>
                    <Radio
                        label='Post'
                        name='radioGroup'
                        value='Post'
                        checked = {loginCheck === 'Post'}
                        onClick={() => setLoginCheck('Post')}
                    
                    />
                    </Form.Field>
                    <LoginConditional loginCheck={loginCheck} />
                    </div>
                </Form>
                
            );
};

export default RadioBox;
