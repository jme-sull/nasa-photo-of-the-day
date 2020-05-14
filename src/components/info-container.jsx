import React from 'react'

export default function InfoContainer (props) {
    return (
    <div> 
        <p>About: {props.currentInfo.explanation}</p>
        <p>Date: {props.currentInfo.date} </p>
    </div>
    )
}