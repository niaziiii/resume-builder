import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';


const logoutuser = (prop, history) => {
  // get cookie
  const cookie = new Cookies();

  // set new cookie value
  cookie.set('jwt', 'logout')

  // set state of app
  prop.setUser(null)

  // redirect to home page
  history.push('/')
}

export default function NavigationBar(prop) {
  const history = useHistory();

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
                <h2>{prop.user.firstName}</h2>
                <button onClick={() => logoutuser(prop, history)}>logout</button>
              </span>
              : <Link to='/login' className='userHeaderlogout'>Login</Link>
          }

        </Toolbar>
      </AppBar>
    </Box>
  )
}
