import React from 'react'
import rendersComponets from './../Forms/index'

function UserInfo() {
    const [stage, setStage] = React.useState(1)
    const nextPage = () => {
        if(stage >= 4) return;
        setStage(prev => prev +=1)
    }
    const prevPage = () => {
        if(stage === 1) return;
        setStage(prev => prev -=1)
    }
    switch (stage) {
        case 1:
            return <rendersComponets.UserBasic  next={nextPage}/>
        case 2:
            return <rendersComponets.UserDetails next={nextPage} prev={prevPage}/>
        case 3:
            return <rendersComponets.UserJobInfo next={nextPage} prev={prevPage}/>
        case 4:
            return <rendersComponets.UserSuccess />
        default:
            break;
    }
}
export default UserInfo
