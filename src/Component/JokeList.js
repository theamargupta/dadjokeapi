import React, { Component } from 'react';
import Joke from './Joke';
import { fetchJokes } from '../Redux/ActionGenerators/Actions';
import { connect } from 'react-redux';
import './JokeList.css';

class JokeList extends Component {
  handleClick = () => {
    this.props.dispatch(fetchJokes);
  };
  render() {
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img
            src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg'
            alt=''
          />
          <button className='JokeList-getmore' onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>
        <div className='JokeList-jokes'>
          {this.props.jokes.map((j) => (
            <Joke key={j.id} text={j.joke} />
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ jokes }) => ({
  jokes: jokes,
});
export default connect(mapStateToProps)(JokeList);
