import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => {
  if (!props.movies.length) {
    return (
      <div>Sorry, there are no movies by that title</div>
    )
  }

  return (
    <div>
      {props.movies.map(movie => (
      <Movie
        movie={movie} key={movie.title + movie.id}
        toggleWatched={props.toggleWatched}
      />
      ))}
    </div>
  )
}

export default MovieList;