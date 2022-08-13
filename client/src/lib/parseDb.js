import axios from 'axios';
const server = '/movielist';

const parseDb = {
  searchMovDb: function(callback) {
    axios.get(server)
      .then((response)=>{
        callback(response.data);
      })
  },

  addMovDb: function(title, callback) {
    axios.post(server, {title: title})
      .then((response)=>{
        console.log(response);
      })
  },
}

export default parseDb;