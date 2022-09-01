import { React, useState } from 'react'
// import { useEffect } from 'react'

import './style/style.css'

// import { BrowserRouter as Router, Route ,BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import checkUser from './contstrains/isLoggedIn'
import  {Home,LoginUser,SignUser,Resume} from './components/index';
import NavigationBar from './components/NavigationBar/NavigationBar';



function App() {
  const [user, setUser] = useState(null)
  // const [animation, setAnimation] = useState(true)

  // using useEffect to check user logged in
  // useEffect(() => {
  //   const getUser = async () => {
  //     await checkUser({ setUser, setAnimation });
  //   };
  //   return () => getUser();
  // }, []);


  return (
    <>
    <NavigationBar user={user} setUser={setUser} />
      {/* {animation ? <div className='app__mainAniamtion slide-bottom'><span>🧾</span></div> : ""} */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
          <Route path="/resume" element={<Resume user={user} setUser={setUser} />}></Route>
          <Route path="/login" element={<LoginUser user={user} setUser={setUser} />}></Route>
          <Route path="/signup" element={<SignUser user={user} setUser={setUser}/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
