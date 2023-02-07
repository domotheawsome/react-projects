import React from 'react'

import {  Outlet, NavLink } from "react-router-dom"

export default function Nav() {
      // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <p className="navbar-brand">StarWars DB</p>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/people">People</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/films">Films</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/planets">Planets</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            <Outlet />
        </nav>
    )
}