import React, { Fragment } from 'react';
import LoginForm from '../components/LoginForm';
import image from '../assets/img/superhero.svg'

const Login = () => {

    return ( 
        <Fragment>
            
            <div className="container py-5 login__container">
                <div className="login__grid">

                    <div className='login' >
                        <h1 className='login__heading custom-gradient'  >SuperHero App</h1>
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