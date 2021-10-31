import React from 'react';
import logo from '../assets/img/superhero.svg';

const HeaderLogo = () => {
    return ( 
        <div className="header__logo">
            <div className="logo__img">
                <img src={logo} alt="app logo"/>
            </div>
            <p>Superhero App</p>
        </div>
     );
}
 
export default HeaderLogo