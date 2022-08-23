import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    return (
        <div className='login-form'>
            <div className="login-form__container">
                <form action="#">
                    <h2>Login </h2>
                    <TextField
                        label="Enter Email Address"
                        id="emailaddress"
                        name="emailaddress"
                        type="email"
                        //   onChange={formAction.handleChange}
                        //   onBlur={formAction.handleBlur}
                        //   value={formAction.values.emailaddress}
                        //   helperText={formAction.touched.emailaddress && formAction.errors.emailaddress ?formAction.errors.firstName : null}
                        // helperText='Email Address'
                    />
                    <br/><br/>
                    <TextField
                        label="Enter Your Password"
                        id="password"
                        name="password"
                        type="password"
                        //   onChange={formAction.handleChange}
                        //   onBlur={formAction.handleBlur}
                        //   value={formAction.values.password}
                        //   helperText={formAction.touched.password && formAction.errors.password ?formAction.errors.firstName : null}
                        // helperText='Your Password'
                    />
                    <br/><br/>
                    <Button variant="contained" endIcon='✔' type='submit' >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login
