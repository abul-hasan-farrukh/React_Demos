import { useState } from "react"

function ColoredDiv() {

    let [color, setColor] = useState('green')
    const myDiv = {
        width: "400px",
        height: "400px",
        backgroundColor: color,
        margin: "auto",
        borderRadius: "10px"
    }

    const changeColor = function(changedColor){
        setColor(changedColor)
    }


  return (
    <>
    <div style={myDiv}>

    </div>

    {/* <button onClick= {changeColor} >Change Color</button> */}
    
    <button onClick= {() => {
        changeColor('red')
    }} >Red</button>

    <button onClick= {() => {
        changeColor('plum')
    }} >Plum</button>

    <button onClick= {() => {
        changeColor('navy')
    }} >Navy</button>
    </>
  )
}

export default ColoredDiv