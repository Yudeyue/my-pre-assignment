import React from 'react'

function ChildCompont(props) {



    return (
        <div>
            <button onClick={() => props.greetHandler('child')} >Greet Parent</button>
        </div>  
    ) 
}

export default ChildCompont