import React from 'react';
import { render } from 'react-dom';
import moviesData from '../data/sampledata';
import MovieList from './movielist';

const App extends React.Component {
  render() {
    return <p> Hello React!</p>;
  }
}

render(<App />, document.getElementById('app'));
