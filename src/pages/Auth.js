import React, { useState } from 'react';
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'




const Auth = () => {

    const [auth, setAuth] = useState(false);

    const handleAuth = e => {
        setAuth(!auth);
    }




    return (
        <div className="auth-system">

            {
                auth ? <Register /> : <Login />
            }

            {
                auth ? (<button onClick={handleAuth}>Login</button>) : (<button onClick={handleAuth}>Register</button>)
            }
            <div>

            </div>
        </div>
    )




}

export default Auth;
