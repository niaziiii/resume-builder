import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


const logoutuser = (prop, history) => {
  // get cookie
  const cookie = new Cookies();

  // set new cookie value
  cookie.set('jwt', 'logout')

  // set state of app
  prop.setUser(null)

  // redirect to home page
  history('/')
}

export default function NavigationBar(prop) {
  const history = useNavigate();

  return (
    <div className='app__main-nav'>
      <div className="app__main-nav__logo"><Link to='/' className='logo-container'>Resume Builder</Link></div>
      <div className="app__main-nav__menu"> 
      {
        prop.user?
        <span className='userHeader'>
                      <h2>{prop.user.firstName.charAt(0).toUpperCase() + prop.user.firstName.slice(1)}</h2>
                     <button onClick={() => logoutuser(prop, history)}>logout</button>
                 </span>:
                 <span className='userHeader'>
                  <Link to='/login' className='userHeaderlogout'>Login</Link>
                  <Link to='/signup' className='userHeaderlogout'>Sign up</Link>
                 </span>
               
                 
      }
      
      </div>
       </div>
  )
}
