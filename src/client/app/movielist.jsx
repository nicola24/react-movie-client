import React from 'react';
import SingleMovie from './singlemovie.jsx';

const MovieList = props => (
  <div>
    {props.movielist.map(x =>
      <SingleMovie movie={x} />)}
  </div>
);

export default MovieList;
