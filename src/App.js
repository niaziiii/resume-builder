import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import UserInfo from './components/UserInfo/UserInfo'
import './style/style.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Forms/LoginForm/Login'


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path='/' >
            {<div>hey</div>}
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/resume'>
            {< div className='container-main'>
              <UserInfo />
            </div>}
          </Route>

        </Switch>

      </div>
    </Router >
  )
}

export default App
