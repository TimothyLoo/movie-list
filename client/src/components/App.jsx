import React from 'react';
import exMovList from '/client/src/data/exMovList.js';
import userMovList from '/client/src/data/userMovList.js';
import MovieList from './MovieList.jsx';
import AddMovieBar from './AddMovieBar.jsx';
import SearchBar from './SearchBar.jsx';
import searchMovDetails from '/client/src/lib/parse.js';

// Change to class implementation
class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      movies: (userMovList.length) ? userMovList : exMovList,
    };

    this.newMovTitleAdd = this.newMovTitleAdd.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.filterWatched = this.filterWatched.bind(this);
  }

componentDidMount () {
  // add properties to each movie
  for (let movie of exMovList) {
    searchMovDetails(movie.title.replace(/\s+/g, '+'), (dataObj)=>{
      for (let resMov of dataObj.results) {
        if (movie.title === resMov.title) {
          movie.id = resMov.id;
          movie.release_date = resMov.release_date;
          movie.popularity = resMov.popularity;
          movie.overview = resMov.overview;
          movie.poster_path = resMov.poster_path;
          movie.watched = false;
          this.setState({ movies: exMovList });
          break;
        }
      }
    });
  }
}

  // New Movie Title Add
  newMovTitleAdd (newTitle) {
    let alrEx = false;
    for (let movie of userMovList) {
      if (movie.title.toLowerCase() === newTitle.toLowerCase()) { alrEx = true; }
    }
    if (newTitle.length && !alrEx) {
      let newMov = {};
      searchMovDetails(newTitle.replace(/\s+/g, '+'), (dataObj)=>{
        for (let resMov of dataObj.results) {
          if (newTitle.toLowerCase() === resMov.title.toLowerCase()) {
            newMov.title = resMov.title;
            newMov.id = resMov.id;
            newMov.release_date = resMov.release_date;
            newMov.popularity = resMov.popularity;
            newMov.overview = resMov.overview;
            newMov.poster_path = resMov.poster_path;
            newMov.watched = false;
            userMovList.push(newMov);
            this.setState({ movies: userMovList });
            break;
          }
        }
      });
    }
  }

  toggleWatched (movie) {
    // loop through movies, update watched status
    for (let userMov of userMovList) {
      if (movie.title === userMov.title) {
        userMov.watched = !userMov.watched;
      }
    }
    for (let exMov of exMovList) {
      if (movie.title === exMov.title) {
        exMov.watched = !exMov.watched;
      }
    }
    // set state for mov list
    this.setState({ movies: this.state.movies });
  }

  // Takes the query & returns list of movies that contain query text
  searchMovie (q) {
    // create new array
    let filtMovList = [];
    // if userMovList is empty, loop through exMovList
    let selMovList = (userMovList.length) ? userMovList : exMovList;
    // loop through movie list
    for (let movie of selMovList) {
      // if movie title contains text, push to new array
      if (movie.title.toLowerCase().includes(q.toLowerCase())) { filtMovList.push(movie); }
    }
    // set movies state to new array
    this.setState({ movies: filtMovList });
  }

    // Changes the list of movies to watched or not watched
    filterWatched (didWatch) {
     // create new array
    let filtMovList = [];
    // if userMovList is empty, loop through exMovList
    let selMovList = (userMovList.length) ? userMovList : exMovList;
    // loop through movie list
    for (let movie of selMovList) {
      // if movie watched is true, push to filtLIst
      if (movie.watched === didWatch) { filtMovList.push(movie) };
    }
    // set movies state to new array
    this.setState({ movies: filtMovList });
  }

  render () {
    return (
    <div>
      <h1 id="appHeader">Movie List</h1>
      <AddMovieBar newMovTitleAdd={this.newMovTitleAdd}/>
      <SearchBar filterWatched ={this.filterWatched} searchMovie={this.searchMovie}/>
      <MovieList
        movies={this.state.movies}
        toggleWatched={this.toggleWatched}
      />
    </div>
    );
  }
}

export default App;