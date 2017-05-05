import React from 'react';
import PropTypes from 'prop-types';

const Player = props => {
  return(
    <li onClick={ () => props.onSelect(props.index) }>{props.name}</li>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number,
  onSelect: PropTypes.func.isRequired
}

export default Player;

//Method - 4 - OK
{/*<PlayerList onSelect={ this.onSelect } data={ this.state.players }/>*/}
{/*<li onClick={ () => props.onSelect(props.index) }>{props.name}</li>*/}

//Method - 6 -  OK
{/*<PlayerList onSelect={ this.onSelect.bind(this) } data={ this.state.players }/>*/}
{/*<li onClick={ () => props.onSelect(props.index) }>{props.name}</li>*/}