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
      <div className="innerMovie">
        <h3 >{props.movie.title}</h3>
        <div className="movButtons">
          <button className="watchedBut" style={sty} onClick={()=>props.toggleWatched(props.movie)}>{watchedText}</button>
          <button className="deleteBut" onClick={()=>props.deleteMov(props.movie)}>Delete</button>
        </div>
      </div>
      <div className="innerMovie">
        <img src={'https://image.tmdb.org/t/p/original/' + props.movie.poster_path} />
        <ul>
          <li><b>Release Date:</b> <em>{props.movie.release_date}</em></li>
          <li><b>Popularity:</b> <em>{props.movie.popularity}</em></li>
          <li><b>Overview:</b> <em>{props.movie.overview}</em></li>
        </ul>
      </div>
    </div>
  )
}

export default Movie;