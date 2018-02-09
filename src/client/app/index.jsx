import React from 'react';
import { render } from 'react-dom';
import moviesData from '../data/sampledata';
import MovieList from './movielist.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>MovieList</p>
        </div>
        <div>
          <MovieList movielist={moviesData}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

