import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const UserSuccess = (prop) => {
  return (
    <Box
    className='UserBasic-Form'
    component="div"
    // onSubmit={}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    
  >
    <div className="container-success">
      <h1>SucessFully Updated Stack</h1>
    </div>
    <Button variant="contained" startIcon='◀' type='submit' onClick={(e)=> {
        e.preventDefault()
        prop.prev()
      }}>
        Prev Section
      </Button>
  </Box>
  )
}

export default UserSuccess
