import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
      <h1>User Previous jobs</h1>
      <form action="#">
        <div className='jobInputsContainer'>
          <TextField
            label="Your First job"
            // helperText="Incorrect entry."
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="About yourself first job"
            type='trxt-area'
          />
        </div>
        <div className='jobInputsContainer'>
          <TextField
            label="Your second job"
            // helperText="Incorrect entry."
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="About yourself second job"
            type='trxt-area'
          />
        </div>
        <Stack direction="row" spacing={20} className="previ-next-button">
          <Button variant="outlined" startIcon='◀' onClick={() => prop.prev()}>
            Prev
          </Button>
          <Button variant="outlined" endIcon='▶' onClick={() => prop.next()}>
            Next
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default UserJobInfo
