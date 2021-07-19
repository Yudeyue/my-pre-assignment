import React from 'react'

function Greet(props) {
    console.log(props)
    return (
        <div>
          <h1>Hello {props.name} {props.heroName}</h1>
        {props.children}  
        </div>  
    ) 
}
//const Greet = () => <hi>Hello YuDeYue</hi>
export default Greet