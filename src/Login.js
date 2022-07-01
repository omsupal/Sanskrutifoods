import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import image1 from './assets/logo.png';
function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={image1}
                    alt="Second slide"
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail Address" />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Sanskruti Foods Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                {/* <button className='login__registerButton'>Create your Account</button> */}
                <div className='register'>
                    <Link to="/CreateAccount">
                        Create your Account
                    </Link>
                </div>
            </div>
        </div >

    )
}

export default Login