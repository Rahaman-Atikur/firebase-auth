import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';
const Login = () => {
    const provider = new GoogleAuthProvider
    const handleGoogleSignIn = ()=>{
        console.log('Clicked');

        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result);

        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};
export default Login;