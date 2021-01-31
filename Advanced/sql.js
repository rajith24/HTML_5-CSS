// const pgp = require('pg-promise')(/* initialization options */);

// const cn = {
//     host: 'localhost', // server name or IP address;
//     port: 59337,
//     database: 'cpu',
//     user: '',
//     password: 'rajith'
// };

// const db = pgp(cn); // database instance;

// // select and return a single user name from id:
// db.one('SELECT name FROM users WHERE id = $1', [123])
//     .then(user => {
//         console.log(user.name); // print user name;
//     })
//     .catch(error => {
//         console.log(error); // print the error;
//     });


import {
    createPool,
    sql
  } from 'slonik';
  
  const pool = createPool('postgres://http://127.0.0.1:59337/browser/');
  
  return pool.connect((connection) => {
    // You are now connected to the database.
    return connection.query(sql`SELECT foo()`);
  })
    .then(() => {
      // You are no longer connected to the database.
    });