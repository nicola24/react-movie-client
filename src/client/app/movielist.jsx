import React from 'react';
import App from './index.jsx';

const MovieList = props => (
  <div>
    {props.movieslist.map(x =>
      <Movie movie={x}/>)}
  </div>
);

export default MovieList;
