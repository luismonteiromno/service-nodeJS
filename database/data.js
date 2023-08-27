const { mysql } = require('mysql');

const conection = mysql.createConnection({
  host: 'localhost',
  port: 3336,
  user: 'root',
  password: "",
  database: "services_control"
});

module.exports = conection;
