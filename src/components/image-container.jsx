import React from 'react'

export default function ImageContainer(props) {

    const { imageSRC } = props
    
    return (
        <div>
        <img alt="nasa" src={imageSRC} />
        </div>

    )
     
}