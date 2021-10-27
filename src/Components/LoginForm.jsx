import React from 'react';
import {useFormik} from 'formik';

const LoginForm = () => {

    const validations = (values)=>{
        const errors = {};
        if (!values.email) {
            errors.email = 'An email address ir required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Please enter a password';
          } else if (values.firstName.length < 4 ) {
            errors.password = 'The password must be at least 3 chars long';
          }

          return errors;
    }



    const formik = useFormik({
        initialValues:{email:'',password:''},
        validations,
        onSubmit: values=>handleSubmit(values)
    })

    const handleSubmit = (values)=>{
        console.log(values);
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