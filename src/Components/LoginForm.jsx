import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik';
import axios from 'axios';
import AuthContext from '../context/authContext';



const LoginForm = () => {
    const history = useHistory();
    const context = useContext(AuthContext);
    const { authUser }=context;

    const validate = (values)=>{
        const errors = {};
        if (!values.email) {
            errors.email = 'An email address is required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email address';
          }

          if (!values.password) {
            errors.password = 'Please enter a password';
          } else if (values.password.length < 4 ) {
            errors.password = 'The password must be at least 3 chars long';
          }

          return errors;
    }


    const formik = useFormik({
        initialValues:{email:'',password:''},
        validate,
        onSubmit: values=>handleSubmit(values)
    })

    const handleSubmit = async (values)=>{

      try {
        const {data} = await axios.post('http://challenge-react.alkemy.org',values);
        localStorage.setItem('superHero-token',data.token);

        authUser(data.token);
  
        history.push('/home');

      } catch (error) {
        console.log(error.response.data.error);
      }

    }

    return ( 
        <form className='login-form__container p-5' onSubmit={ formik.handleSubmit } >

            <label htmlFor="email">Email</label>
            <input
              autoComplete='off'
              type="email" 
              name="email"
              className='form-control-plaintext login-form__input'
              id="email" 
              placeholder="batman@heroes.com"
              onChange={formik.handleChange} 
            />

            {formik.errors.email && <p className='alert alert-danger mt-2' >{formik.errors.email}</p> }

            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              className='form-control-plaintext login-form__input'
              placeholder='Your password here'
              onChange={formik.handleChange} 
            />

            {formik.errors.password && <p className='alert alert-danger mt-2'>{formik.errors.password}</p> }
            <input className='btn btn-outline-primary mt-4' type="submit" value="Sign In" />

        </form>
     );
}
 
export default LoginForm;