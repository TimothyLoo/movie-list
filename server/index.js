const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
// Import CONTROLLERS
const controllers = require('./controllers.js');

app.use(express.json());
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})


// ROUTES
app.get('/movielist', controllers.get);

app.post('/movielist', controllers.addMovie);

app.put('/movielist', controllers.updateMovie);