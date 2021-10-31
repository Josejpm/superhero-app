import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik';
import axios from 'axios';
import HeroesContext from '../context/HeroesContext';



const LoginForm = () => {
    const history = useHistory();
    const heroesContext = useContext(HeroesContext);
    const {setErrorMsg,errorMsg} = heroesContext

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
        history.push('/home');

      } catch (error) {
        console.log(error)
        setErrorMsg(error.response.data.error)
        setTimeout(() => {
          setErrorMsg(null)
        }, 3500);

      }

    }

    return ( 
        <form className='login-form__container p-5' onSubmit={ formik.handleSubmit } >
            <input
              autoComplete='off'
              type="email" 
              name="email"
              className='form-control-plaintext form__input'
              id="email" 
              placeholder="batman@heroes.com"
              onChange={formik.handleChange} 
            />
            <label htmlFor="email">Email</label>

            {formik.errors.email && <p className='alert alert-danger mt-2 text-center' >{formik.errors.email}</p> }

            <input 
              type="password" 
              name="password" 
              id="password"
              className='form-control-plaintext form__input mt-4'
              placeholder='Your password here'
              onChange={formik.handleChange} 
            />
            <label htmlFor="password">Password</label>

            {formik.errors.password && <p className='alert alert-danger mt-2 text-center '>{formik.errors.password}</p> }
            <input className='mt-4 form-button ' type="submit" value="Sign In" />

            { errorMsg && <p className='alert alert-danger mt-4 text-center'> {errorMsg} </p>}
        </form>
     );
}
 
export default LoginForm;