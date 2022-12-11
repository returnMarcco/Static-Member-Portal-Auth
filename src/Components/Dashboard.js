import React from 'react';
import { Header } from 'semantic-ui-react';
import Gorilla from '../gorilla.png';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';




const Dashboard = () => {

    const navigate = useNavigate();
    function handleSignOut() {
        signOut(auth).then(() => {
            console.log('sign out successful')
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
    <div>
        <Header as='h1'>Welcome to the DEV@Deakin Dashboard</Header>
        <br></br>
        <br></br>
        <Button style={{color: 'black'}} className='login-button' onClick={handleSignOut}>Back Home</Button>
        <h1 style={{color: 'goldenrod', fontFamily: 'sans-serif'}}>The Dashboard is currently in development.</h1>
        <img className='gorilla-style' src={Gorilla} />
    </div>
)};

export default Dashboard;