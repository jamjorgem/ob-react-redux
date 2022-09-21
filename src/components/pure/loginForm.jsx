import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

import PropTypes from 'prop-types'

const loginForm = ({ loged, fetching, onLogin }) => {

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid Email Format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });




    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={initialCredentials}
            // yup validation schema
            validationSchema={loginSchema}
            onSubmit={async (values) => {
                onLogin(values.email, values.password)
            }}
        >
            {/* we obtain props from formik */}

            {({ errors, touched, isSubmitting, handleSubmit, handleBlur }) => (

                <Form>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" placeholder="Email" />
                    {
                        errors.email && touched.email && (
                            < ErrorMessage name="email" component="div"></ErrorMessage>

                        )
                    }
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" placeholder="Password" />
                    {
                        errors.password && touched.password && (
                            < ErrorMessage name='password' component="div"></ErrorMessage>
                        )
                    }

                    <button type="submit">Submit</button>
                    {fetching ? (<p>LOADING...</p>) : null}
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>

            )
            }



        </Formik>
    )
}

loginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default loginForm

