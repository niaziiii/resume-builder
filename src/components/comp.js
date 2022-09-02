import NavigationBar from "./NavigationBar/NavigationBar";
import HomePage from "./Home/HomePage";
import Login from "./Forms/LoginForm/Login";
import React from "react";
import SignForm from "./Forms/SignupForm/signForm";
import UserInfo from "./UserInfo/UserInfo";
const Home = ({user,setUser}) =>{
    return(
        <>
            <NavigationBar user={user} setUser={setUser} />
            <HomePage/>
        </>
    )
}

const LoginUser = ({user,setUser}) =>{
    return(
        <>
            <NavigationBar user={user} setUser={setUser} />
            <Login user={user} setUser={setUser} />
        </>
    )
}
const SignUpUser = ({user,setUser}) =>{
    return(
        <>
            <NavigationBar user={user} setUser={setUser} />
            <SignForm user={user} setUser={setUser} />
        </>
    )
}
const ResumeBuilder =({user,setUser}) =>{
    return(
        <>
            <NavigationBar user={user} setUser={setUser} />
            <UserInfo user={user} setUser={setUser} />
        </>
    )
}
export {
    Home,
    LoginUser,
    SignUpUser,
    ResumeBuilder,
}