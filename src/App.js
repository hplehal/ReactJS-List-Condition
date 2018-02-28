import React, { Component } from 'react';
import ValidationComponent from './Input/ValidationComponent';
import CharComponent from './Input/CharComponent';
import './App.css';

class App extends Component {
  state= {
    inputs: ''
  }

  lengthHandler = (event)=>{
  this.setState({inputs: event.target.value});
  }

  deleteHandler = (thisChar) =>{
     const copyInput = this.state.inputs.split('');
     copyInput.splice(thisChar, 1);
     const updateInput = copyInput.join('');
     this.setState({inputs : updateInput });
  }
  render() {
    const charList = this.state.inputs.split('').map((ch, i)=> {
      return <CharComponent char={ch} key ={i} click ={()=>this.deleteHandler(i)}/>;
    });

    return(
      <div className="App">
      <h1>Try it out!!</h1>
        <input type="text" 
          onChange={this.lengthHandler} 
          value={this.state.inputs} />
        <p>{this.state.inputs} has a length of {this.state.inputs.length}</p>
        <ValidationComponent name={this.state.inputs} length={this.state.inputs.length} />
        {charList}
      </div>
    )
  }
}
export default App;
