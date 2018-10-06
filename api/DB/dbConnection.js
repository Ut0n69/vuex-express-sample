const mysql = require('mysql');
const dbConfig = require('./dbConfig');

module.exports = mysql.createConnection(dbConfig);
