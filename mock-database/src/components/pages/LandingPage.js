import React from 'react'


export default function LandingPage({ type }) {
    return(
        <div className='landingCard'>
            <h1> Welcome to the {type} Page!</h1>

            <h4 className="font-weight-light"> Click on any of the side links to view stats.</h4>
        </div>
    )
}