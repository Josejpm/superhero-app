import React, { Fragment } from 'react';
import LoginForm from '../Components/LoginForm';

const Login = () => {

    

    return ( 
        <Fragment>
            <h1>Login</h1>
            <div className="container">
                <LoginForm/>
            </div>
        </Fragment>
     );
}
 
export default Login;