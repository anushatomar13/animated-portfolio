import React, { useEffect } from 'react'

const consoleMyName = () => {
    console.log()}

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
