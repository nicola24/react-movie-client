import React from 'react';
import { render } from 'react-dom';
import moviesData from '../data/sampledata';
import MovieList from './movielist.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      movies: moviesData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h1>MovieList</h1>
        </div>
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </div>
        <div>
          <MovieList movielist={this.state.movies} searchTerm={this.state.value} />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));

