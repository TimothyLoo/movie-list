import { API_KEY } from '../config/config.js';

var server = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=';

var searchMovDetails = function(keyword, callback) {
  fetch(server + keyword)
  .then(res => res.json())
  .then(
    (result) => {
      // console.log(result);
      callback(result);
    },
    (error) => {
      console.log(error);
    }
  )
};

export default searchMovDetails;