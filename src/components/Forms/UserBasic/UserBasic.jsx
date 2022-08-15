import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';


const UserBasic = (prop) => {
  console.log(prop);
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
