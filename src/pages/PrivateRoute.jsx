import React,{useEffect} from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({component:Component, ...props}) => {

    let token;

    useEffect(()=>{
        
        token = localStorage.getItem('superHero-token');
        // eslint-disable-next-line
    },[])

    // En la siguiente sintaxis, si el usuario no esta autenticado redirecciona a la pag ppal de inicio de sesion
    // Si el usuario esta autenticado envia el componente hijo, en este caso proyectos
    
    console.log(token)
    return ( 
        <Route
            {...props} 
            render= {props=>token
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