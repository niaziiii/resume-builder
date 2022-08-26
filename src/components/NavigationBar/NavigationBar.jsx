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
    <div className='app__main-nav'>
      <div className="app__main-nav__logo"><Link to='/' className='logo-container'>Resume Builder</Link></div>
      <div className="app__main-nav__menu"> 
      {
        prop.user?
        <span className='userHeader'>
                      <h2>{prop.user.firstName}</h2>
                     <button onClick={() => logoutuser(prop, history)}>logout</button>
                 </span>:
                 <span className='userHeader'>
                  <Link to='/login' className='userHeaderlogout'>Login</Link>
                  <Link to='/signup' className='userHeaderlogout'>Sign up</Link>
                 </span>
               
                 
      }
      
      </div>
       </div>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         {/* {<img src={one} alt="" />} */}
    //       </IconButton>
    //       <Typography variant="h2" component="div" sx={{ flexGrow: 0 }}>
    //         <Link to='/' className='resume-builder-heading'>Resume Builder</Link>
    //       </Typography>
    //       {
    //         prop.user ?
    //           <span className='userHeader'>
    //             <h2>{prop.user.firstName}</h2>
    //             <button onClick={() => logoutuser(prop, history)}>logout</button>
    //           </span>
    //           : <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Link to='/login' className='userHeaderlogout'>Login</Link></Typography>
            
    //       }

    //     </Toolbar>
    //   </AppBar>
    // </Box>
  )
}
