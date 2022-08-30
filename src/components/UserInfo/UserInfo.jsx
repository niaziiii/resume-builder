import React from 'react'
import rendersComponets from '../Forms/index';


// stepper for status
const Stepperr = ({ value }) => {
    return (
        <div className='app-user-info-stepper'>
            <span>
                <b style={value === 1 || value === 2 || value === 3 || value === 4 ? { color: '#1cb5e0' } : {}}>Basic</b>
                <div style={value === 2 || value === 3 || value === 4 ? { background: '#1cb5e0' } : {}}></div>
                <b style={value === 2 || value === 3 || value === 4 ? { color: '#1cb5e0' } : {}}>Details</b>
                <div style={value === 3 || value === 4 ? { background: '#1cb5e0' } : {}}></div>
                <b style={value === 3 || value === 4 ? { color: '#1cb5e0' } : {}}>Job Info</b>
                <div style={value === 4 ? { background: '#1cb5e0' } : {}}></div>
                <b style={value === 4 ? { color: '#1cb5e0' } : {}}>Success</b>
            </span>
        </div>
    )
}

function UserInfo(prop) {
    const [userData, setUserData] = React.useState({
        basic: {},
        details: {},
        jobInfo: {},
    })
    const [stage, setStage] = React.useState(1)
    
    const nextPage = () => {
        if (stage >= 4) return;
        setStage(prev => prev += 1)
    }

    if (prop.user === null) {
        return (
            <div className="notlogin">
                <h1>You are not logged In. <br /> Kindly Login 😀</h1>
            </div>
        )
    }


    switch (stage) {
        case 1:
            return <div className='user-info-wraper'>
                <Stepperr value={stage} />
                <rendersComponets.UserBasic
                    next={nextPage}
                    userData={userData}
                    setUserData={setUserData} />
            </div>
        case 2:
            return <div className='user-info-wraper'>
                <Stepperr value={stage} />
                <rendersComponets.UserDetails
                    next={nextPage}
                    userData={userData}
                    setUserData={setUserData}
                />
            </div>
        case 3:
            return <div className='user-info-wraper'>
                <Stepperr value={stage} />
                <rendersComponets.UserJobInfo
                    next={nextPage}
                    userData={userData}
                    setUserData={setUserData}
                />
            </div>
        case 4:
            return <div className='user-info-wraper'>
                <Stepperr value={stage} />
                <rendersComponets.UserSuccess
                    userData={userData}
                    setUserData={setUserData}
                />
            </div>

        default:
            break;
    }
}
export default UserInfo
