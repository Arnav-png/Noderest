const mysql = require("mysql");

module.exports = async function (sid) {
  var dbConfig = await require("./db.config.js")(sid);
  var connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  return connection;
};