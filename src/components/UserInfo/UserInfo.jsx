import React from 'react'
import rendersComponets from './../Forms/index';



function UserInfo() {
    const [userData, setUserData] = React.useState({
        basic: {},
        details: {},
        jobInfo: {},
    })
    console.log(userData);
    const [stage, setStage] = React.useState(1)
    const nextPage = () => {
        if (stage >= 4) return;
        setStage(prev => prev += 1)
    }
    const prevPage = () => {
        if (stage === 1) return;
        setStage(prev => prev -= 1)
    }



    switch (stage) {
        case 1:
            return <rendersComponets.UserBasic
                next={nextPage}
                userData={userData}
                setUserData={setUserData} />
        case 2:
            return <rendersComponets.UserDetails
                next={nextPage}
                prev={prevPage}
                userData={userData}
                setUserData={setUserData}
            />
        case 3:
            return <rendersComponets.UserJobInfo
                next={nextPage}
                prev={prevPage}
                userData={userData}
                setUserData={setUserData}
            />
        case 4:
            return <rendersComponets.UserSuccess
                prev={prevPage}
                userData={userData}
                setUserData={setUserData}
            />

        default:
            break;
    }
}
export default UserInfo
