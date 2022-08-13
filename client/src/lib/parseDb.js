import axios from 'axios';
const server = '/movielist';

const parseDb = {
  searchMovDb: function(callback) {
    axios.get(server)
      .then((response)=>{
        callback(response.data);
      })
  },

  addMovDb: function(movie, callback) {
    console.log('parseDB', movie)
    axios.post(server, movie)
      .then((response)=>{
        callback(response);
      })
  },

  updateMovDb: (watched, id, callback)=>{
    axios.put(server, {watched: watched, id: id})
      .then((response)=>{
        callback(response);
      })
  },

  deleteMovDb: (movie, callback)=>{
    axios.delete(server, {data: movie})
      .then((response)=>{
        callback(response);
      })
  }
}

export default parseDb;