import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { downloadCreatedFile, sendDataAndCreateFile } from './userSuccessRequest';


const UserSuccess = (prop) => {
  const [message, setMessage] = React.useState('Click to create file')
  const [download, setDownload] = React.useState(false)
  const [random, setRandom] = React.useState(null)


  return (
    <Box
      className='UserBasic-Form'
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}

    >
      <div className="container-success">
        <h1>SucessFully Updated Stack</h1>
      </div>

      <Button variant="contained" type='submit' onClick={async (e) => {
        e.preventDefault()
        try {
          let randomStr = (Math.random() + 1).toString(36).substring(7);
          setMessage('Please wait...')
          const create = await sendDataAndCreateFile({ data: prop.userData, key: randomStr })
          if (!create.status === 201) return;
          setMessage('Successfully')
          setRandom(randomStr)
          setDownload(true)

        } catch (error) {
          console.log(error);
        }
      }}>
        {message}
      </Button>
      <br /> <br />
      {
        download ?
          <Button variant="contained" onClick={async () => {
            if (!random) return;
            await downloadCreatedFile({ key: random });
          }}>Download Now</Button>
          : ''
      }
    </Box>
  )
}

export default UserSuccess
