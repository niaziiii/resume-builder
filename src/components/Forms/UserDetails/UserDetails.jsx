import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { InputLabel } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup'
import userDetailsInput from './userDetailsInputs';


const UserDetails = (prop) => {
  const formIK = Formik({
    initialValues: {
      ...userDetailsInput.inputs
    },
    validationSchema: yup.object(userDetailsInput.validationObject),
    onSubmit: (value) => {
      console.log(value);
      prop.next()
    }
  })
  const action = formIK.props.value;

  return (
    <Box
      className='UserBasic-Form'
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>User Details</h1>
      <form action="#" onSubmit={(e) => {
        e.preventDefault()
        action.handleSubmit()
      }}>
        <div className='inputsContainer'>
          <TextField
            label='Your High school'
            type='text'
            id='highScool'
            name='highScool'
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.highScool}
            helperText={action.touched.highScool && action.errors.highScool ? action.errors.highScool : null}

          />
          <TextField
            label='Your university'
            type='text'
            id='university'
            name='university'
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.university}
            helperText={action.touched.university && action.errors.university ? action.errors.university : null}
          />
        </div>
        <div className='inputsContainer'>
          <TextField
            label='Your address'
            type='address'
            id='homeAddress'
            name='homeAddress'
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.homeAddress}
            helperText={action.touched.homeAddress && action.errors.homeAddress ? action.errors.homeAddress : null}
          />

          <div className="select-input">
            <InputLabel id="resume-select">Status</InputLabel>
            <Select
              required
              labelId="resume-select"
              id='status'
              name='status'
              onChange={action.handleChange}
              onBlur={action.handleBlur}
              value={action.values.status}
            >
              <MenuItem value='single'>Single</MenuItem>
              <MenuItem value='married'>Married</MenuItem>
            </Select>
          </div>
        </div>

        <div className='inputsContainer'>
          <TextField
            label='Your githubLink'
            type='link'
            id='githubLink'
            name='githubLink'
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.githubLink}
            helperText={action.touched.githubLink && action.errors.githubLink ? action.errors.githubLink : null}
          />
          <div className="select-input">
            <InputLabel id="resume-select">Sex</InputLabel>
            <Select
              labelId="sex-select"
              id='sex'
              name='sex'
              onChange={action.handleChange}
              onBlur={action.handleBlur}
              value={action.values.sex}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </div>
        </div>

        <div className='inputsContainer'>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="About yourself"
            type='text-area'
            id="aboutYourself"
            name="aboutYourself"
            onChange={action.handleChange}
            onBlur={action.handleBlur}
            value={action.values.aboutYourself}
            style={{ width: 200, height: 80 }}
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




export default UserDetails
