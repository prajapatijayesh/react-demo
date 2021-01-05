

import React, { useState } from 'react'
import axios from 'axios';
import * as yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

const SignInSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required')
});

function Login() {
    const username = useFormInput('');
    const password = useFormInput('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let history = useHistory();

    /**
     * REPLACE ENDPOINT 
     * @param {*} reqObj 
     */
    const auth = (reqObj) => {
        setLoading(true);
        // { email: username.value, password: password.value }
        axios.post(`endpoint`, reqObj).then(response => {
            setLoading(false);
            console.log('response', response);
            // <a href="/home" />
            history.push("/home")
        }).catch(error => {
            console.log('error', error);
            setLoading(false);
            setError('Something went wrong. Please try again later.');
        });
    }

    return (
        <div className="auth-wrapper" style={{ paddingTop: "100px" }}>
            <div className="auth-inner">
                <h3>Sign In</h3>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={values => {
                        auth(values)
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
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
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                {loading && <div class="spinner-border spinner-border-sm" role="status"></div>}
                                Login
                            </button>
                            {error && <><small style={{ color: 'red' }}>{error}</small> </>}

                            <p className="forgot-password text-right">
                                Forgot <a href="/forgot-password">password?</a>
                            </p>
                            <p className="forgot-password text-right">
                                Register <a href="/sign-up">sign up?</a>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;