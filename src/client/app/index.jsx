import React from 'react';
import { render } from 'react-dom';
import moviesData from '../data/sampledata';
import MovieList from './movielist.jsx';
import SearchBar from '.searchbar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>MovieList</h1>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <MovieList movielist={moviesData}/>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

