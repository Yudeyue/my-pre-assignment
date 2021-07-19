
import React, {Component} from 'react';

class Bio extends Component{


    render (){
       return(
        <div className="Bio">
            <h1 className="name">Leanne Graham</h1>
            <div className="occupation">
                <p> @april.biz </p>
            </div>
            
            <text style={{color: 'blue'}}>
                 <a href="http://hildegard.org" target="_blank" rel="noreferrer" >
                     http://hildegard.org</a>
            </text>
        </div>    
       
       )
    }
 }
export default Bio