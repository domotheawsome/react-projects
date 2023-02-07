import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Item({ url, data, type }) {
    
    let activeStyle = {
        textDecoration: "underline",
      };

    
    return(
        <div className="list-group list-group-flush mx-3 mt-4 scroll">
            {Object.entries(data).map(([key, value]) => (
                    <div key={key} className="scroll">
                    <ul id="collapseExample1" className="collapse show list-group list-group-flush scroll">
                        {console.log(key,value)}
                        <li className="list-group-item py-1"><NavLink            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={`/${url}/${key}`}>{value[type]}</NavLink></li>
                        </ul> 
                    </div>
            ))}
      </div>

    )
}