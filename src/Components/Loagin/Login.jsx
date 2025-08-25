import React from 'react';

const Login = () => {
    const handleGoogleSignIn = ()=>{
        console.log('Clicked');
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleGoogleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;