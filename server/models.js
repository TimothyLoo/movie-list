const db = require('./dbConnection.js');

module.exports = {
  getAll: (callback)=>{
    db.query('SELECT * FROM `movies`', [], (err, results)=>{
      callback(err, results);
    });
  }
}