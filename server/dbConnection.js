const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movielist'
});

connection.connect((err)=>{
  if (err) { throw new Error ('This is a connection err'); }
});

module.exports = connection;