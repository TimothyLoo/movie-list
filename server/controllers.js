// Import models
const models = require('./models.js');

module.exports = {
  get: (req, res)=>{
    models.get(req.query.title, (err, data)=>{
      if (err) { throw new Error('This is a controller err'); }
      else { res.json(data); }
    });
  },

  addMovie: (req, res)=>{
    models.addMovie(req.body.title, (err, data)=>{
      if (err || !req.body.title.length) { throw err; }
      else { res.end('Successful Post'); }
    });
  }
}