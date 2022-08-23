import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import UserInfo from './components/UserInfo/UserInfo'
import './style/style.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Forms/LoginForm/Login'



function App() {
  const [user, setUser] = React.useState(null)
  console.log(user);
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
