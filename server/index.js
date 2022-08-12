const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
// Import CONTROLLERS
const controllers = require('./controllers.js');

app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


// ROUTES
app.get('/movielist', controllers.getAll);

app.post('/movielist', (req, res)=>{
  res.send('Successful POST request');
});