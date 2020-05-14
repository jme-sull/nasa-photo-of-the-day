import React from 'react'

export default function InfoContainer (props) {

    const { explanation, date } = props

    return (

    <div> 
        <p>About: {explanation}</p>
        <p>Date: {date} </p>
    </div>

    )
}