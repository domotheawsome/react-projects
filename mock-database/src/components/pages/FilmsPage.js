import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
//import FullCard from './FullCard'

export default function FilmsPage({ data }) {
    return(
        <div>
            
            <SideBar url={"films"} data={ data } type={"title"}/>
            <Outlet />
            
        </div>
    )
}