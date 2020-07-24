import React, { Component } from 'react';
import './Joke.css';

class Joke extends Component {
  render() {
    return (
      <div className='Joke'>
        <div className='Joke-text'>{this.props.text}</div>
      </div>
    );
  }
}
export default Joke;
