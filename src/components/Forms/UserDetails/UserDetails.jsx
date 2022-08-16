import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const UserDetails = (prop) => {
  return (
    <Box
      className='UserBasic-Form'
      component="div"
      // onSubmit={}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1>User Details</h1>
      <form action="#">
        <div className='inputsContainer'>
          <TextField
            label="Your High school"
            type='email'
            // helperText="Incorrect entry."
          />
          <TextField
            label="Your University name"
            type='text'
          />
        </div>
        <div className='inputsContainer'>
          <TextField
            label="Your Home Address"
            type='address'
          />

          <div className="select-input">
            {/* <InputLabel id="resume-select">Status</InputLabel> */}
            <Select
              labelId="resume-select"
              id="demo-simple-select"
              value='Enterage'
              label="Age"
            // onChange={handleChange}
            >
              <MenuItem value='Enterage'>Status</MenuItem>
              <MenuItem value={10}>Single</MenuItem>
              <MenuItem value={20}>Married</MenuItem>
            </Select>
          </div>
        </div>
        <div className='inputsContainer'>
          <TextField
            label="Github Username"
            type='link'
          />
          <div className="select-input">
            <Select
              labelId="resume-select"
              id="sex-select"
              value='Enterage'
              label="Age"
            // onChange={handleChange}
            >
              <MenuItem value='Enterage'> sex</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </div>
        </div>
        <div className='inputsContainer'>
        <TextareaAutosize
      aria-label="empty textarea"
      placeholder="About yourself"
      type='trxt-area'
      style={{ width: 200, height:80 }}
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

export default UserDetails
