
import React from 'react'
import './App.css';

import Nav from './components/Nav'
import PeoplePage from './components/pages/PeoplePage'
import PlanetsPage from './components/pages/PlanetsPage'
import FilmsPage from './components/pages/FilmsPage'
//import NotFound from './components/NotFound'
import FourOhFourPage from './components/pages/FourOhFourPage';
import PersonCard from './components/PersonCard';
import PlanetCard from './components/PlanetCard';
import FilmCard from './components/FilmCard';

import personData from './data/people.json';
import planetData from './data/planets.json';
import filmData from './data/films.json';


import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';


function App() {

  return(
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
          
          <Route path="/people" element={<PeoplePage  data={ personData }/>}>
            <Route index element={<LandingPage type={"People"}/>} />
            <Route path=":name" element={<PersonCard data={ personData } />} />
          </Route>
          <Route path="/planets" element={<PlanetsPage data={ planetData}/>}>
            <Route index element={<LandingPage type={"Planets"} />} />
            <Route path=":name" element={<PlanetCard data={ planetData } />} />
          </Route>
          <Route path="/films" element={<FilmsPage data={ filmData }/>}>
            <Route index element={<LandingPage type={"Films"}/>} />
            <Route path=":name" element={<FilmCard data= { filmData } />} />
          </Route>
        
        <Route path="*" element={<FourOhFourPage />} />
      </Routes>
    </div>

);}

export default App;
