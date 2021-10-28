import React, { useState } from 'react';

import AuthContext from "./authContext";


const AuthProvider = (props)=>{

    const [auth,setAuth]=useState(false);

    const authUser = (token)=>{
        if(token!==null){
            console.log('si hay token');
            setAuth(true);
        }
    }

    return <AuthContext.Provider
        value={{
            auth,
            authUser,
            setAuth,
            test:true
        }}
    >

            {props.children}
        </AuthContext.Provider>
}

export default AuthProvider