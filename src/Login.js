import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"
import { auth } from './Firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')

                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                 alt=""/>

            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <from>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                        {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='Password' value={password} onChange=
                        {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login_signInButton'>
                        Sign in</button>

                </from>
                <p>
                    By signing-in you agree to Amazon's conditions
                    of use & sale. please see our Privacy Notice,
                    our Cookies Notice and Interest-Based Ads
                    Note.
                    AMAZON FAKE CLONE
            </p>
                <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
