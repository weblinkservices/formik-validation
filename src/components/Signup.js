import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { ErrorMessage, useField } from 'formik';
export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
      
      // acceptedTerms: Yup.boolean()
      //        .required('Required')
      //        .oneOf([true], 'You must accept the terms and conditions.'),
      //      jobType: Yup.string()
      //        .oneOf(
      //          ['designer', 'development', 'product', 'other'],
      //          'Invalid Job Type'
      //        )
      //        .required('Required'),
  })

  // const MyCheckbox = ({ children, ...props }) => {
  //   // React treats radios and checkbox inputs differently other input types, select, and textarea.
  //   // Formik does this too! When you specify `type` to useField(), it will
  //   // return the correct bag of props for you -- a `checked` prop will be included
  //   // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  //   const [field, meta] = useField({ ...props, type: 'checkbox' });
  //   return (
  //     <div>
  //       <label className="checkbox-input">
  //         <input type="checkbox" {...field} {...props} />
  //         {children}
  //       </label>
  //       {meta.touched && meta.error ? (
  //         <div className="error">{meta.error}</div>
  //       ) : null}
  //     </div>
  //   );
  // };
  
  // const MySelect = ({ label, ...props }) => {
  //   const [field, meta] = useField(props);
  //   return (
  //     <div>
  //       <label htmlFor={props.id || props.name}>{label}</label>
  //       <select {...field} {...props} />
  //       {meta.touched && meta.error ? (
  //         <div className="error">{meta.error}</div>
  //       ) : null}
  //     </div>
  //   );
  // };
  
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />

            {/* <MySelect label="Job Type" name="jobType">
             <option value="">Select a job type</option>
             <option value="designer">Designer</option>
             <option value="development">Developer</option>
             <option value="product">Product Manager</option>
             <option value="other">Other</option>
           </MySelect>
 
           <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
           </MyCheckbox> */}
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
