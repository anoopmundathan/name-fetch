import React ,{ Component } from 'react';
import PlayerList from './PlayerList';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      players: []
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
  
  render() {
    return(
      <div>
      <h1>Hello React Rock again</h1>
        <PlayerList data={ this.state.players }/>
      </div>
    );
  }
}

export default App;