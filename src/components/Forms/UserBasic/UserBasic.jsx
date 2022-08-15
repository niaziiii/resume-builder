import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const UserBasic = () => {
  return (
    <Box
      className='UserBasic-Form'
      component="form"
      // onSubmit={}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>Basic User Info</h1>
      <div className='inputsContainer'>
        <TextField
          label="Enter First Name"
          helperText="Incorrect entry."
        />
        <TextField
          label="Enter Last Name"
        />
      </div>
      <div className='inputsContainer'>
        <TextField
          label="Enter First-Name"
        />
        <input type="date" name="" id="" />

      </div>
      <Button variant="contained" endIcon='✔' type='submit'>
        Next Section
      </Button>
    </Box>
  )
}

export default UserBasic
