import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
//import FullCard from './FullCard'

export default function PlanetsPage({ data }) {
    return(
        <div>
            
            <SideBar url={"planets"} data={ data } type={"name"}/>
            <Outlet />
            
        </div>
    )
}