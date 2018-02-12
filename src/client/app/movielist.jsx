import React from 'react';
import SingleMovie from './singlemovie.jsx';

const MovieList = ({ movielist, searchTerm }) => (
  <div>
    {movielist.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase())).map(x => <SingleMovie movie={x} />)}
  </div>
);

export default MovieList;
