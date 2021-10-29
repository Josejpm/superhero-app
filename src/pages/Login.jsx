import React, { Fragment } from 'react';
import LoginForm from '../Components/LoginForm';
import image from '../assets/img/superhero.svg'

const Login = () => {

    

    return ( 
        <Fragment>
            
            <div className="container py-5">
                <div className="login__grid mt-5">

                    <div className='login' >
                        <h1 className='login__heading'>SuperHero App</h1>
                        <LoginForm/>
                    </div>

                    <div>
                        <img className='login__image' src={image} alt="superhero" />
                    </div>
                   
                </div>
            </div>
        </Fragment>
     );
}
 
export default Login;