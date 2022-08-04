import React from 'react';

var Movie = (props) => {
  let watchedText = '';
  let sty = {};
  if (props.movie.watched) {
    watchedText = 'Watched';
    sty.backgroundColor = 'LightGreen';
  } else {
    watchedText = 'Not Watched';
  }

  return (
    <div className="movie">
      <img src={'https://image.tmdb.org/t/p/original/' + props.movie.poster_path} />
      <ul>
        <h3 >{props.movie.title}</h3>
        <li><b>Release Date:</b> <em>{props.movie.release_date}</em></li>
        <li><b>Popularity:</b> <em>{props.movie.popularity}</em></li>
        <li><b>Overview:</b> <em>{props.movie.overview}</em></li>
      </ul>
      <button id="watchedBut" style={sty} onClick={()=>props.toggleWatched(props.movie)}>{watchedText}</button>
    </div>
  )
}

export default Movie;