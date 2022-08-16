import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const UserJobInfo = (prop) => {
  return (
    <Box
    className='UserBasic-Form'
    component="div"
    // onSubmit={}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
  >
    <h1>User Job info</h1>
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
    <Stack direction="row" spacing={20} className="previ-next-button">
      <Button variant="outlined" startIcon='' onClick={()=> prop.prev()}>
        Prev
      </Button>
      <Button variant="outlined" endIcon='▶' onClick={()=> prop.next()}>
        Next
      </Button>
    </Stack>
    </form>
  </Box>
  )
}

export default UserJobInfo
