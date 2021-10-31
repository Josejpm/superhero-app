import React, { Fragment } from 'react';
import AppHeader from './AppHeader';

const MainLayout = ({children}) => {
    return ( 
        <Fragment>
            <AppHeader/>
            {children}
        </Fragment>
     );
}
 
export default MainLayout;