import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
const Login = () => {
    const [userInfo, setUserInfo] = useState(null);
    const provider = new GoogleAuthProvider
    const handleGoogleSignIn = () => {
        console.log('Clicked');
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUserInfo(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            //signout  successfully
            console.log('signout successfully');
            setUserInfo(null);
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
            <button onClick={handleSignOut}>Sign Out</button>
            {
                userInfo && <div>
                    <h3>{userInfo.displayName}</h3>
                    <p>{userInfo.email}</p>
                </div>
            }
        </div>
    );
};
export default Login;