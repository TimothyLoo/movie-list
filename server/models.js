const db = require('./dbConnection.js');

module.exports = {
  get: (title = '', callback)=>{
    title = '%' + title + '%'
    db.query(`SELECT * FROM movies WHERE title LIKE ?`, [title], (err, results)=>{
      callback(err, results);
    });
  },

  addMovie: (data, callback)=>{
    db.query(`INSERT INTO movies (id, title, overview, release_date, popularity, poster_path, watched) VALUES (?, ?, ?, ?, ?, ?, 0)`, data, (err, results)=>{
      callback(err, results);
    });
  },

  updateMovie: (watched, id, callback)=>{
    db.query(`UPDATE movies SET watched = ? WHERE id = ?`, [watched, id], (err, results)=>{
      callback(err, results);
    });
  }
}