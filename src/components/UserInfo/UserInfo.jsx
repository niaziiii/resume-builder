import React from 'react'
import rendersComponets from './../Forms/index'

function UserInfo() {
    return (
        <>
            <rendersComponets.UserBasic />
            <rendersComponets.UserDetails />
            <rendersComponets.UserJobInfo />
            <rendersComponets.UserSuccess />
        </>
    )
}
export default UserInfo
