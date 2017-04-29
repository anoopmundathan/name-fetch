import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  return(
    <li>{props.name}</li>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired
}

export default Player;