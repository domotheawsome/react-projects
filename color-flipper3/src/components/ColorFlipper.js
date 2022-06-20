import React from "react"

export default function ColorFlipper() {
    const [color, setColor] = React.useState('white')
    const [textColor, setTextColor] = React.useState('black')


    function toggleColor() {
        var randomColor = Math.floor(Math.random()*16777215);
        var newTextColor = (randomColor > 16200000) ? 'black' : 'white'

        setTextColor(newTextColor)

        randomColor = "#" + randomColor.toString(16);

        setColor(randomColor)
        return 0

    }

    return(

        <div style={{backgroundColor: color}} className="flex h-screen m-auto">
            <div className="m-auto space-y-4">
                <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded scale-150" onClick={toggleColor}>Click Me!</button>

                <p style={{color: textColor}}>Color: {color}</p>
            </div>
        </div>
    )
}