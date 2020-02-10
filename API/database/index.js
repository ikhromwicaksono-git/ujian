const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root!@#456',
  database: 'tokokasih',
  port: 3306,
  
})
module.exports = db;
