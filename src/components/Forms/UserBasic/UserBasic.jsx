import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as yup from "yup";
import userBasicInputs from './userBasicInputs';

const UserBasic = (prop) => {
  const formIK = Formik({
    initialValues : {
      ...userBasicInputs.inputs
    },
    validationSchema: yup.object(userBasicInputs.validationObject),
    onSubmit : (value) => {
      prop.setUserData(prev => ({
        ...prev,
        basic: value,
      }))
      prop.next()

    }
  })
  const formAction = formIK.props.value;
  return (
    <Box
      className='UserBasic-Form'
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>Basic User Info</h1>
      <form action='#' onSubmit={(e) => {
         e.preventDefault()
         formAction.handleSubmit()
      }} >

       <div className='inputsContainer'>
        <TextField
          label="Enter first name"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formAction.handleChange}
          onBlur={formAction.handleBlur}
          value={formAction.values.firstName}
          helperText={formAction.touched.firstName && formAction.errors.firstName ?formAction.errors.firstName : null}
        />

        <TextField
          label="Enter last name"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formAction.handleChange}
          onBlur={formAction.handleBlur}
          value={formAction.values.lastName}
          helperText={formAction.touched.lastName && formAction.errors.lastName ?formAction.errors.lastName : null}
        />

      </div> 

      <div className='inputsContainer'>
        <TextField
          label="Enter father name"
          id="fatherName"
          name="fatherName"
          type="text"
          onChange={formAction.handleChange}
          onBlur={formAction.handleBlur}
          value={formAction.values.fatherName}
          helperText={formAction.touched.fatherName && formAction.errors.fatherName ?formAction.errors.fatherName : null}
        />
        
         <TextField
          // label="Enter father name"
          type='date'
          id="date"
          name="date"
          onChange={formAction.handleChange}
          onBlur={formAction.handleBlur}
          value={formAction.values.date}
          helperText={formAction.touched.date && formAction.errors.date ?formAction.errors.date : null}
        />
        
      </div> 
       <div className='inputsContainer'>
      <TextField
        label="Your email-address"
        type='email'
        id="email"
        name="email"
        onChange={formAction.handleChange}
        onBlur={formAction.handleBlur}
        value={formAction.values.email}
        helperText={formAction.touched.email && formAction.errors.email ?formAction.errors.email : null}

      />
      <TextField
        label="Your phone number"
        type='number'
        id="phoneNumber"
        name="phoneNumber"
        onChange={formAction.handleChange}
        onBlur={formAction.handleBlur}
        value={formAction.values.phoneNumber}
        helperText={formAction.touched.phoneNumber && formAction.errors.phoneNumber ?formAction.errors.phoneNumber : null}
      />
    </div> 
      <Button variant="contained" endIcon='✔' type='submit' >
        Next Section
      </Button>
      </form>
    </Box>
  )
}


export default UserBasic
