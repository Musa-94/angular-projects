const mysql = require('mysql');
const dbProps = require('./db_properties');

const {
  user,
  host,
  dbName: database,
  password,
} = dbProps;

class MySQL {
  onConnection = () => {
    return mysql.createConnection({
      host,
      user,
      database,
      password,
    })
  }
}

module.exports = MySQL;
