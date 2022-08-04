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
    <div id="movie">
      <h3>{props.movie.title}</h3>
      <button style={sty} onClick={()=>props.toggleWatched(props.movie)}>{watchedText}</button>
    </div>
  )
}

export default Movie;