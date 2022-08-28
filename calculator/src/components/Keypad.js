import React from "react"

export default function Keypad(props) {

    function handleButton(e) {
        //const {name, value} = e.target
        props.setCalcData(prevCalcData => {return {
            ...prevCalcData, e
        }})

    }

    return (
        <table>
            <tr>
                <td><button onClick={handleButton}>AC</button></td>
                <td><button>+/-</button></td>
                <td><button>%</button></td>
                <td><button>/</button></td>
            </tr>
            <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
                <td><button>X</button></td>
            </tr>
            <tr>
                <td><button>4</button></td>
                <td><button>5</button></td>
                <td><button>6</button></td>
                <td><button>-</button></td>
            </tr>
            <tr>
                <td><button>1</button></td>
                <td><button>2</button></td>
                <td><button>3</button></td>
                <td><button>+</button></td>
            </tr>
            <tr>
                <td><button>u</button></td>
                <td><button>0</button></td>
                <td><button>.</button></td>
                <td><button>=</button></td>
            </tr>
        </table>
    )
}