const mysql = require("mysql");


var config = require("./dbConfig");

var conn = mysql.createConnection({
  host: config.HOST,
  user: config.USERNAME,
  password: config.PASSWORD,
  database: config.DB
});

conn.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
module.exports = conn;

