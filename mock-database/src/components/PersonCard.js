import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import FourOhFourPage from "./pages/FourOhFourPage";

/*
        <>
            {Object.entries(itemData).map(([key, value]) => (
                <div key={key}>
                      <p>{key} : {typeof value === 'string' && value.startsWith('/') ? <p><Link to={key}>{value}</Link></p> : <p>{value}</p>}</p>
                </div>
            ))}
        </>
*/
export default function PersonCard({ data }) {
    const { name } = useParams()
    const itemData = data[name]

    const films = itemData.films

    // i cannot seem to figure out how to navigate to the 404 page from the /people /planet /film url. i.e. the user inputs /people/1392183091, i cannot figure out how to navigate to the 404 page.

    // so far i attempted to solve it via the Navigate hook, seems to be futile. i also tinkered with the routes in App.js to see if i can accommodate the bad url there. still nothing

    // conceptually, i think the best bet is to use some level of hook to navigate the user to the 404 page. ideally i would use the navigate hook but it doesn't seem to be working. i'll continue thinking about this.. 

    if(!itemData){
        return (<Navigate replace to="/404" />)
    }


    return itemData ? (
        <div className="jsonCard">
            <p><span className="title">Name:</span> {itemData.name}</p>
            <p><span className="title">Height:</span> {itemData.height}</p>
            <p><span className="title">Mass:</span> {itemData.mass}</p>
            <p><span className="title">Hair Color:</span> {itemData.hair_color}</p>
            <p><span className="title">Skin Color:</span> {itemData.skin_color}</p>
            <p><span className="title">Eye Color:</span> {itemData.eye_color}</p>
            <p><span className="title">Birth Year:</span> {itemData.birth_year}</p>
            <p><span className="title">Gender:</span> {itemData.gender}</p>
            <p><span className="title">Home World:</span><Link to={itemData.homeworld}> {itemData.homeworld}</Link></p>
            <p><span className="title">Films: </span></p><ul>{films.map((films) => 
                <li key={films}><Link to={films}>{films}</Link></li>
            )}</ul>

        </div>
    ) : <FourOhFourPage />
    
}