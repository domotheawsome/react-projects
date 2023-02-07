import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
//mport NotFound from './NotFound'
import FourOhFourPage from "./pages/FourOhFourPage";



export default function FilmCard({ data }) {
    const { name } = useParams()
    const itemData = data[name]

    const characters = itemData.characters
    const planets = itemData.planets
    if(!itemData){
        return (<Navigate replace to="/404" />)
    }
    return itemData ? (
        
        <div className="jsonCard">
            {console.log(itemData.title)}
            <p><span className="title">Title: </span>{itemData.title}</p>
            <p><span className="title">Episode ID: </span>{itemData.episode_id}</p>
            <p><span className="title">Opening Crawl: </span>{itemData.opening_crawl}</p>
            <p><span className="title">Director: </span>{itemData.director}</p>
            <p><span className="title">Producer: </span>{itemData.producer}</p>
            <p><span className="title">Release Date: </span>{itemData.release_date}</p>
           
            <p><span className="title">Characters: </span></p><ul>{characters.map((character) => 
                <li key={character}><Link to={character}>{character}</Link></li>
            )}</ul>
            <p><span className="title">Planets: </span></p><ul>{planets.map((planet) => 
                <li key={planet}><Link to={planet}>{planet}</Link></li>
            )}</ul>


        </div>
    ) : <FourOhFourPage />
    
}