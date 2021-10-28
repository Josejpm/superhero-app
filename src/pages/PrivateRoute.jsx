import React,{useEffect,useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import AuthContext from '../context/authContext';

const PrivateRoute = ({component:Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const {auth,authUser}=authContext;

    useEffect(()=>{
        const LSToken = localStorage.getItem('superHero-token');
        authUser(LSToken)
        // eslint-disable-next-line
    },[])

    console.log(auth);
    return ( 
        <Route
            {...props} 
            render= {props=> !auth
            ? (
                <Redirect to="/" />
            ) 
            : (
                <Component {...props} />
            ) 
            }
        />


     );
}
 
export default PrivateRoute;