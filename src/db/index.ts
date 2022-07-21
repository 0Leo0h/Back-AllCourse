import mysql from 'promise-mysql';

const pool = mysql.createPool({
  host: 'localhost',
  database: 'allcourse',
  user: 'root',
  password: ''
});

pool.getConnection()
  .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is Connected');
  });

const connection = pool

export { connection };