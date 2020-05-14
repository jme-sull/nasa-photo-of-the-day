import React from 'react'

export default function InfoContainer (props) {

    const { explaination, date } = props

    return (

    <div> 

        <p>Description: {explaination}</p>
        <p>Date: {date} </p>
        <p> </p>

    </div>

    )
}