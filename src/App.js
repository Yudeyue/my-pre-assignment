import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import Photo from './Photo';
import Bio from './Bio';
import ClickUpdate from './ClickUpdate';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo />   
        <Bio />
        <ClickUpdate />     
      </div>
    );
  }
}

export default App;
