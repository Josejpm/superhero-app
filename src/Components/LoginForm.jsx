import React from 'react';
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik';
import axios from 'axios';

const LoginForm = () => {
    const history = useHistory();

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

      const {data} = await axios.post('http://challenge-react.alkemy.org',values);
      localStorage.setItem('superHero-token',data.token);
      history.push('/home')

    }

    return ( 
        <form onSubmit={ formik.handleSubmit } >

            <input onChange={formik.handleChange} type="email" name="email" id="email" placeholder="batman@heroes.com"/>
            {formik.errors.email && <p>Error de email</p> }
            <input onChange={formik.handleChange} type="password" name="password" id="password"/>
            {formik.errors.password && <p>Error de pass</p> }
            <input type="submit" value="Sign In" />

        </form>
     );
}
 
export default LoginForm;