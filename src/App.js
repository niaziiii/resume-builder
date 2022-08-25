import { React, useEffect, useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import UserInfo from './components/UserInfo/UserInfo'
import './style/style.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Forms/LoginForm/Login'
import checkUser from './contstrains/isLoggedIn'


function App() {
  const [user, setUser] = useState(null)
  // using useEffect to check user logged in
  useEffect(() => {
    const getUser= async () => {
      await checkUser({ setUser });
    };
    return () => {
      getUser(); // run it, run it
    };
  }, []);


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' >
            <NavigationBar user={user} setUser={setUser} />
            {<div>hey</div>}
          </Route>


          <Route path='/login'>
            <NavigationBar user={user} setUser={setUser} />
            <Login user={user} setUser={setUser} />
          </Route>


          <Route path='/resume'>
            <NavigationBar user={user} setUser={setUser} />
            {< div className='container-main'>
              <UserInfo user={user} />
            </div>}
          </Route>
        </Switch>

      </div>
    </Router >
  )
}

export default App
