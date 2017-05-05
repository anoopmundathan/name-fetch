import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const PlayerList = props => {

  // Map over player list and create Player component  
  let player = props.data.map((player, index) => (
    <Player index={index} key={player.id} name={player.name} onSelect={props.onSelect} />
  ));

  return(
    <div>
      <ul>
        { player }        
      </ul>
    </div>
  );
}

PlayerList.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}
export default PlayerList;
