// Import models
const models = require('./models.js');

module.exports = {
  getAll: (req, res)=>{
    models.getAll((err, data)=>{
      if (err) { throw new Error('This is a controller err'); }
      else { res.json(data); }
    });
  },

  addMovie: (req, res)=>{}
}