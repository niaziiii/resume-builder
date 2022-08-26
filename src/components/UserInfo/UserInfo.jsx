import React from 'react'
import rendersComponets from './../Forms/index';



function UserInfo(prop) {
    console.log(prop);
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
    const prevPage = () => {
        if (stage === 1) return;
        setStage(prev => prev -= 1)
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
