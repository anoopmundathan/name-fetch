import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <input 
                    type="text" 
                    onChange={ (e) => this.props.onChange(e) } 
                    value={ this.props.value }/>
                <input 
                    type="button" 
                    value="Add" 
                    onClick={ () => this.props.onAdd() }/>
            </div>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default Input;