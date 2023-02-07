import React from "react";
import { Link, useParams } from "react-router-dom";
import FourOhFourPage from "./pages/FourOhFourPage";



export default function PlanetCard({ data }) {
    const { name } = useParams()
    const itemData = data[name]

    const films = itemData.films
    const residents = itemData.residents

    return itemData ? (
        <div className="jsonCard">
            <p><span className="title">Name:</span> {itemData.name}</p>
            <p><span className="title">Rotation Period:</span> {itemData.rotation_period}</p>
            <p><span className="title">Orbital Period:</span> {itemData.orbital_period}</p>
            <p><span className="title">Diameter:</span> {itemData.diameter}</p>
            <p><span className="title">Climate:</span> {itemData.climate}</p>
            <p><span className="title">Gravity:</span> {itemData.gravity}</p>
            <p><span className="title">Terrain:</span> {itemData.terrain}</p>
            <p><span className="title">Surface Water:</span> {itemData.surface_water}</p>
            <p><span className="title">Population:</span> {itemData.population}</p>
            <p><span className="title">Films:</span> </p><ul>{films.map((films) => 
                <li key={films}><Link to={films}>{films}</Link></li>
            )} </ul>
            <p><span className="title">People:</span> </p><ul>{residents.map((resident) => 
                <li key={resident}><Link to={resident}>{resident}</Link></li>
            )} </ul>

        </div>
    ) : <FourOhFourPage />
    
}