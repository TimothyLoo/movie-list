const db = require('./dbConnection.js');

module.exports = {
  get: (title = '', callback)=>{
    title = '%' + title + '%'
    db.query(`SELECT * FROM movies WHERE title LIKE ?`, [title], (err, results)=>{
      callback(err, results);
    });
  },

  addMovie: (title, callback)=>{
    db.query(`INSERT INTO movies (title) VALUES (?)`, [title], (err, results)=>{
      callback(err, results);
    });
  }
}