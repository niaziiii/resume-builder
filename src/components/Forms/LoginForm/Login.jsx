import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';


const validateUser = {
    email: yup.string()
        .required('email is required'),
    password: yup.string()
        .min(8, 'password must be grater than 7 character')
        .required('password must be required')
}


const Login = (prop) => {
    const history = useHistory();

    const formik = Formik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object(validateUser),
        onSubmit: (value) => {
            console.log(value);
            prop.setUser({
                name: "Niazi"
            })


            console.log(prop);
            history.push("/resume");
 
        }
    })
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
