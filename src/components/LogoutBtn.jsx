import React from 'react';
import { useHistory } from 'react-router-dom';


const LogoutBtn = () => {
    const history = useHistory()

    const handleClick=()=>{
        localStorage.removeItem('superHero-token');
        history.push('/');
    }

    return ( 
        <button  onClick={handleClick} className='btn btn-outline logout-btn '> Log Out </button>
     );
}
 
export default LogoutBtn;