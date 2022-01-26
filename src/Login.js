import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import Hirekarma from './Hirekarma.png';
import  './login.css';
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
    const [{},dispatch]=useStateValue();
    const signIn = () =>{
     auth.signInWithPopup(provider)
     .then((result)=>{
         dispatch({
             type: actionTypes.SET_USER,
             user: result.user,
         }) 
     })
     .catch((error)=>alert(error.message));
    };

    return (
        <div className="login">
            <div className="login_container">
                <img
                src={Hirekarma}
                alt="Whatsapp"/>
            <div className="login-text">
                <h1>Sign in to Hirekarma</h1>
            </div>
            <Button onClick={signIn}>
                SIGN IN WITH GOOGLE
            </Button>
             </div>
        </div>
    )
}

export default Login
