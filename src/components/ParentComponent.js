import React, {Component} from 'react';
import ChildCompont from './ChildComponent';

class ParentComponent  extends Component{
    
    constructor() {
        super()
        this.state = {
            parentName: 'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(childName){
        alert('Hello '+ this.state.parentName + ' from ' + childName)
    }
    render () {
        return (
            <div>
                <ChildCompont greetHandler={this.greetParent}></ChildCompont>
                
            </div>
        )
    }
}
export default ParentComponent