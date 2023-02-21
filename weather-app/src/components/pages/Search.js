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
                <p>Enter your desired City to recieve weather data from!</p>
                <p>Please input in the format "City,State,Country".</p>
            <form onSubmit={e => {
                e.preventDefault()
                setSearchParams({ q: inputQuery })
            }}>
                <input value={inputQuery} onChange={e => setInputQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            
                {error && <ErrorContainer>An error occurred...</ErrorContainer>}
                {!error && !loading && repos.length === 0 && (
                    <p>No results found</p>
                )}
                {!error && !loading && repos.length > 0 && (
                    <Card repos={repos} />
                )}
                {loading && <Spinner />}
            </div>
                    </div>
                    )
}

export default Search
