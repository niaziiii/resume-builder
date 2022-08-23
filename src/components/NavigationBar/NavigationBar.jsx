import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
// import MenuIcon from '@mui/material';

export default function NavigationBar(prop) {
  // console.log(prop);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* {<img src={one} alt="" />} */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' className='resume-builder-heading'>Resume Builder</Link>
          </Typography>
          {
            prop.user ?
              <span className='userHeader'>
              <h2>{prop.user.name}</h2>
              <button>logout</button>
              </span>

              : <Button color="inherit" ><Link to='/login' className='userHeaderlogout'>Login</Link></Button>
          }

        </Toolbar>
      </AppBar>
    </Box>
  )
}
