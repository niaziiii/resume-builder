import React, { useState, useEffect } from "react";
import './style/style.css'
import { Routes, Route } from "react-router-dom";

import { Home, LoginUser, SignUpUser, ResumeBuilder } from "./components/comp";
import checkUser from './contstrains/isLoggedIn'

function App() {
  const [user, setUser] = useState(null)

  // using useEffect to check user logged in
  useEffect(() => {
    const getUser = async () => {
      await checkUser({ setUser });
    };
    return () => getUser();
  }, []);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<LoginUser user={user} setUser={setUser} />} />
        <Route path="/signup" element={<SignUpUser user={user} setUser={setUser} />} />
        <Route path="/resume" element={<ResumeBuilder user={user} setUser={setUser} />} />

      </Routes>

    </div>
  );
}

export default App;
