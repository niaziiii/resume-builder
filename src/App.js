import React from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import UserInfo from './components/UserInfo/UserInfo'
import './style/style.css'
function App() {
  return (
    <div>
      <NavigationBar/>
      <div className='container-main'>
      <UserInfo/>
      </div>
    </div>
  )
}

export default App
