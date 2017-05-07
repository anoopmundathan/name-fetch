import React ,{ Component } from 'react';

import Input from './Input';
import PlayerList from './PlayerList';

var idCounter = 3;

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      players: [],
      value: ""
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/api')
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          players: responseData
        });
    });
  }
  
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  
  onSelect(index) {
    let players = [
      ...this.state.players.slice(0, index),
      ...this.state.players.slice(index + 1)
    ];
    this.setState({
      players: players
    });
  }

  onAdd() {
    idCounter += 1;
    let player = {
      id: idCounter,
      name: this.state.value
    }
    
    let players = [...this.state.players, player];

    this.setState({
      players: players,
      value: ""
    });
  }

  render() {
    return(
      <div>
      <h1>React fetch Example</h1>
        <Input 
          onChange={ this.onChange.bind(this) } 
          onAdd={ this.onAdd.bind(this) } 
          value={this.state.value} />
        <PlayerList 
          onSelect={ this.onSelect.bind(this) } 
          data={ this.state.players }/>
      </div>
    );
  }
}

export default App;

{/*<PlayerList onSelect={ this.onSelect.bind(this) } data={ this.state.players }/>*/}