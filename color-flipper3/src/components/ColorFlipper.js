import React from "react"

export default function ColorFlipper() {
    return(
        <div className="flex h-screen m-auto">
            <div className="m-auto">
                <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded scale-150">Click Me!</button>
            </div>
        </div>
    )
}