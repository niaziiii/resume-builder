import Login from "./Forms/LoginForm/Login";
import SignForm from "./Forms/SignupForm/signForm";
import HomePage from "./Home/HomePage";
import NavigationBar from "./NavigationBar/NavigationBar";
import UserInfo from "./UserInfo/UserInfo";


const Home = ({ user, setUser }) => {
    return (
        <>
            <NavigationBar user={user} setUser={setUser} />
            <HomePage />
        </>
    )
}

const Resume = ({ user, setUser }) => {
    return (
        <>
            <NavigationBar user={user} setUser={setUser} />
            {< div className='container-main'>
                <UserInfo user={user} />
            </div>}
        </>
    )
}
const LoginUser = ({ user, setUser }) => {
    return (
        <>
            <NavigationBar user={user} setUser={setUser} />
            <Login user={user} setUser={setUser} />
        </>
    )
}
const SignUser = ({ user, setUser }) => {
    return (
        <>
            <NavigationBar user={user} setUser={setUser} />
            <SignForm user={user} setUser={setUser} />    </>
    )
}

export  { 
    Home,
    LoginUser,
    SignUser,
    Resume
}