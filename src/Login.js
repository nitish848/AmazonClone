import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {

            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {

            if (auth) {
                history.push('/');
            }
        }).catch(error => alert(error.message))

    }
    return (
        <div className="login">
            <Link to="/">
                <div className="login__logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
                </div>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={
                        e => setEmail(e.target.value)
                    } />
                    <h5>Password</h5>
                    <input type='Password' value={password} onChange={
                        e => setPassword(e.target.value)
                    } />
                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
