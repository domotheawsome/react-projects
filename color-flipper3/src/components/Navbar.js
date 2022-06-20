import React from "react"

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-blue mr-6">
                <h1 className="font-semibold text-2xl tracking-tight">Color Flipper!</h1>
            </div>
            <h3 className="inline-block px-4 py-2 text-lg">Ariel M.</h3>
        </nav>
    )
}