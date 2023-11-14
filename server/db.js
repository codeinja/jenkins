const Pool = require('pg').Pool

const pool=new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: "perntodo",
  host: process.env.DB_HOST,
  port: 5432, 
});

module.exports = pool;