import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Spinner from '../Spinner'
import ErrorContainer from '../ErrorContainer'
import useReposSearch from '../hooks/useWeatherSearch'
import Card from '../Card'

/*
<h4>Displaying results for:</h4>
            <h2>{searchParams.get("q")}</h2>
        */

function Search({ query }) {
    const [ searchParams, setSearchParams ] = useSearchParams()

    const [ inputQuery, setInputQuery ] = useState(searchParams.get("q") || "")

    const [ repos, loading, error ] = useReposSearch(searchParams.get("q"))

    return (
        <div >
            
            <div className='container'>
                <div className='desc'>
                <p>Enter your desired City to recieve weather data from!</p>
                <p>Please input in the format "City,State,Country".</p>
                </div>
               
            <form className='mb' onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            
                {error && <ErrorContainer>An error occurred... make sure your input is valid.</ErrorContainer>}
                {!error && !loading && repos.length === 0 && (
                    <p>Input something into the search bar!</p>
                )}
                {!error && !loading && repos.length > 0 && (
                    <Card repos={repos} />
                )}
                {!error && loading && <Spinner />}
            </div>
                    </div>
                    )
}

export default Search
