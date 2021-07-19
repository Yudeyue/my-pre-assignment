import React, {Component} from 'react';
import Update from './Update';

class ClickUpdate  extends Component{
    
    constructor() {
        super()
        this.state = {
    
            
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: "street: Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                
                company: "name: Romaguera-Crona  catchPhrase: Multi-layered client-server neural-net",
                  bs: "harness real-time e-markets"
              
            
        }
        this.greetParent=this.greetParent.bind(this)
    }

    greetParent(){

        alert  ( 'Hello to ' +  this.state.name 
                             +  ' username: '
                             +  this.state.username
                             +  ' email: '
                             +  this.state.email
                             +  ' address: '
                             +  this.state.address
                             +  ' suite: '
                             +  this.state.suite
                             +  ' city: '
                             +  this.state.city
                             +  ' company: '
                             +  this.state.company)
    }        
    render () {
        return (
            <div>
                <Update greetHandler={this.greetParent}></Update>
                
            </div>
        )
    }
}
export default ClickUpdate