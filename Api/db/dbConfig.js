const config = require("config");
 
module.exports = {
    HOST: config.get("dbConfig.host"),
    USERNAME: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: config.get("dbConfig.database")
  };