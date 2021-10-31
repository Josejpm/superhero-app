import React from 'react';
import HeaderLogo from './HeaderLogo';
import LogoutBtn from './LogoutBtn';
import SearchForm from './SearchForm';

const AppHeader = () => {
    return ( 

        <header className="app-header">
            <HeaderLogo/>
            <SearchForm/>
            <LogoutBtn/>
        </header>
    );
}
 
export default AppHeader;