// Import models
const models = require('./models.js');

module.exports = {
  get: (req, res)=>{
    models.get(req.query.title, (err, data)=>{
      if (err) { throw new Error('This is a controller err'); }
      else {
        data.map(movie=>{ movie.watched = Boolean(movie.watched); })
        res.json(data);
      }
    });
  },

  addMovie: (req, res)=>{
    console.log('controller body', req.body)
    const {id, title, overview, release_date, popularity, poster_path} = req.body;
    const data = [id, title, overview, release_date, popularity, poster_path];
    models.addMovie(data, (err, data)=>{
      if (err) { throw err; }
      else { res.end('Successful Post'); }
    });
  },

  updateMovie: (req, res)=>{
    models.updateMovie(req.body.watched, req.body.id, (err, data)=>{
      if (err) { throw err; }
      else { res.end ('Update Successful'); }
    });
  }
}