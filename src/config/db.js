const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'development',
  password: '123',
  port: 5432, // Puerto por defecto para PostgreSQL
});

pool.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos', err);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
  
  module.exports = pool;