import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
//import FullCard from './FullCard'

export default function PeoplePage({ data }) {
    return(
        <div>
            
            <SideBar url={"people"} data={ data } type={"name"}/>
            <Outlet />
            
        </div>
    )
}