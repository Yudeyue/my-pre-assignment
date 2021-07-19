import React, {Component} from 'react';

function Update (props) {
    
       return(
        <div className="Update" >
            <button style={{color: 'blue'}} onClick={() => props.greetHandler()} >MORE DETAILS</button>
             
       </div>
       )
    
 }
export default Update