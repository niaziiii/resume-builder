import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie';



// formik values validation object
const validateUser = {
    email: yup.string()
        .required('email is required'),
    password: yup.string()
        .min(8, 'password must be grater than 7 character')
        .required('password must be required')
}


const getUser = async (data, props, history) => {
    // getting universal-cookie token component
    const cookies = new Cookies();
    try {
        const user = await axios({
            method: 'POST',
            url: 'https://mk-resume-builder.herokuapp.com/api/v1/login',
            data: {
                ...data
            }
        });

        if (!user.data.status === 'success') return;

        // set cookie of jwt token
        cookies.set('jwt', `${user.data.token}`, { path: '/' });

        // set user to state of application
        props.setUser(user.data.data.user)

        history("/");

    } catch (error) {
        console.log(error);
    }
}






const Login = (prop) => {
    // create redirect history function ;
    const history = useNavigate();

    // use react formik library to validate form data and submit form
    const formik = Formik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object(validateUser),
        onSubmit: async (value) => {
            await getUser(value, prop, history)
        }
    })

    // getting intance from formik component library
    const formData = formik.props.value;

    return (
        <div className='login-form'>
            <div className="login-form__container">
                <form action="#" onSubmit={(e) => {
                    e.preventDefault()
                    formData.handleSubmit()
                }}>
                    <h2>Login </h2>
                    <TextField
                        label="Enter Email Address"
                        id="email"
                        name="email"
                        type="email"
                        onChange={formData.handleChange}
                        onBlur={formData.handleBlur}
                        value={formData.values.email}
                        helperText={formData.touched.email && formData.errors.email ? formData.errors.email : null}
                    />
                    <br /><br />
                    <TextField
                        label="Enter Your Password"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formData.handleChange}
                        onBlur={formData.handleBlur}
                        value={formData.values.password}
                        helperText={formData.touched.password && formData.errors.password ? formData.errors.password : null}
                    />
                    <br /><br />
                    <Button variant="contained" endIcon='✔' type='submit' > Login </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
