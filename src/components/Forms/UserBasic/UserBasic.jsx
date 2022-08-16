import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const UserBasic = (prop) => {
  return (
    <Box
      className='UserBasic-Form'
      component="div"
      // onSubmit={}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>Basic User Info</h1>
      <form action="#">
      <div className='inputsContainer'>
        <TextField
          label="Enter first name"
          helperText="Incorrect entry."
        />
        <TextField
          label="Enter last name"
        />
      </div>
      <div className='inputsContainer'>
        <TextField
          label="Enter father name"
        />
         <TextField
          // label="Enter father name"
          type='date'
          helperText="required date. of birth"

        />
        
      </div>
      <div className='inputsContainer'>
      <TextField
        label="Your email-address"
        type='email'
        helperText="Incorrect entry."
      />
      <TextField
        label="Your phone number"
        type='number'
      />
    </div>
      <Button variant="contained" endIcon='✔' type='submit' onClick={(e)=> {
        e.preventDefault()
        prop.next()
      }}>
        Next Section
      </Button>
      </form>
    </Box>
  )
}

export default UserBasic
