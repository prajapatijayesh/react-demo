
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
})

/**
 * TODO: SIGN UP LOGIC
 */

function SignUp() {
    return (
        <div className="auth-wrapper" style={{ paddingTop: "100px" }}>
            <div className="auth-inner">
                <h3>Sign Up</h3>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} placeholder="Enter First Name" />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} placeholder="Enter Last Name" />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label>Email address</label>
                                <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} placeholder="Enter email" />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Enter password" />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="/sign-in">sign in?</a>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignUp;