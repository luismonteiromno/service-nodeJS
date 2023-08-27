const { Pool } = require('pg');

const pool = new Pool({
  user: 'Luis',
  password: '9090',
  host: 'localhost',
  database: 'services_control',
  port: 5432, 
});
