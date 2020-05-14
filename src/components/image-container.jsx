import React from 'react'
import InfoContainer from './info-container'

export default function ImageContainer(props) {

    const { currentInfo } = props
    
    return (
        <div>
        <img alt="nasa" src={currentInfo.url} />
        <InfoContainer currentInfo = {currentInfo} />
        </div>

        

    )

   
     
}