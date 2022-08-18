import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import userJobInfoInputs from "./userJobInfoInputs";
import { Formik } from 'formik';
import * as yup from 'yup'


const UserJobInfo = (prop) => {
  const formIK = Formik({
    initialValues: userJobInfoInputs.inputs,
    validationSchema: yup.object(userJobInfoInputs.validationObject),
    onSubmit: (values) => {
      console.log(values);
      prop.next()
    }
  })

  const action = formIK.props.value;

  return (
    <Box
      className='UserBasic-Form '
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>User Previous jobs</h1>
      <form action="#" className='userJobInfo' onSubmit={(e) => {
        e.preventDefault()
        action.handleSubmit();
      }}>
        <div className='jobInputsContainer'>
          <TextField
            label="Your First job"
            type='text'
            id="firstJob"
            name="firstJob"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.firstJob}
            helperText={action.touched.firstJob && action.errors.firstJob ? action.errors.firstJob : null}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="About yourself first job"
            type='trxt-area'
            id="firstJobAboutUs"
            name="firstJobAboutUs"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.firstJobAboutUs}
            required
          />
        </div>
        <div className='jobInputsContainer'>
          <TextField
            label="Your second job"
            type='trxt'
            id="firstJobAboutUs"
            name="secondJob"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.secondJob}
            helperText={action.touched.secondJob && action.errors.secondJob ? action.errors.secondJob : null}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="About yourself second job"
            type='text'
            id="secondJobAboutUs"
            name="secondJobAboutUs"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.secondJobAboutUs}
            required
          />
        </div>
     
        <Button variant="contained" endIcon='✔' type='submit' >
          Next Section
        </Button>

      </form>
    </Box>
  )
}

export default UserJobInfo
