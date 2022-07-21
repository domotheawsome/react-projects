import React from 'react'

export default function Card(props) {
    return(
        <div className='card--container'>
            <img src={props.url} className="card--img" alt="user input" />
            <div className='card--caption'>
                <button className="btn btn-sm btn-outline-danger">X</button>
                <p>{props.caption}</p>
            </div>
        </div>
    )
}